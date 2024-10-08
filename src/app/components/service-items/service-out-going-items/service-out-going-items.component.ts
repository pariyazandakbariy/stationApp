import { Component } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Util } from 'src/app/utils/util';
import {
  IServiceItems,
  ServiceItemsLabels,
} from '../service-items/service-items.label';
import { OutgoingServiceCS } from 'src/app/store/componentStore/outgoingServiceCS';
import { BehaviorSubject, map } from 'rxjs';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { Links } from 'src/app/utils/links';
import { LabelIconComponent } from 'src/app/svg-icons/label-icon/label-icon.component';
import { PrintIconComponent } from 'src/app/svg-icons/print-icon/print-icon.component';
import { OutboxIconComponent } from 'src/app/svg-icons/outbox-icon/outbox-icon.component';
import { NiraModalService } from 'nira-modal';
import { Router } from '@angular/router';
import { TrolleyIconComponent } from 'src/app/svg-icons/trolley-icon/trolley-icon.component';
import { OffLoadModalComponent } from '../off-load-modal/off-load-modal.component';
import ServiceCargoDM from 'src/app/store/dataModels/serviceCargoDM';
import { DriverDetailViewerComponent } from '../../detail-viewer/driver-detail-viewer/driver-detail-viewer.component';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';
import { ServiceDetailViewerComponent } from '../../detail-viewer/service-detail-viewer/service-detail-viewer.component';

@Component({
  selector: 'app-service-out-going-items',
  templateUrl: './service-out-going-items.component.html',
  styleUrls: ['./service-out-going-items.component.scss'],
})
export class ServiceOutGoingItemsComponent {
  labels =
    this.labelManagerService.getLabels<IServiceItems>(ServiceItemsLabels);
  searchText: string = '';
  loading = false;
  tableData: BehaviorSubject<ServiceCargoDM[]> = new BehaviorSubject<
    ServiceCargoDM[]
  >([]);
  columnsSchema = [
    {
      key: 'billCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableBillCode,
      detailViewer: {
        key: 'billCode',
        detailViewerComponent: BillDetailViewerComponent,
      },
    },

    {
      key: 'serviceMinimal.serviceCode',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableServiceCode,
      data: {
        key: 'serviceCode',
      },
      detailViewer: {
        key: 'serviceCode',
        detailViewerComponent: ServiceDetailViewerComponent,
      },
    },
    {
      key: 'carrierNameFaAndServiceNo',
      type: COLUMNS_TYPES.MULTI_COLUMN,
      label: this.labels.tableCarrierCode,
      columns: [
        {
          key: 'serviceMinimal',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableCarrierCode,
          data: {
            key: 'carrier.carrierNameFa',
          },
        },
        {
          key: 'serviceMinimal',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableServiceNo,
          data: {
            key: 'serviceNo',
          },
        },
      ],
    },

    {
      key: 'serviceMinimal',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableDriverFullName,
      data: {
        key: 'driver.driverFullName',
      },
      detailViewer: {
        key: 'driver.driverCode',
        detailViewerComponent: DriverDetailViewerComponent,
      },
    },

    {
      key: 'billDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableDate,
    },
    {
      key: 'receiverName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableReceiverName,
    },
    {
      key: 'originCity',
      type: COLUMNS_TYPES.MULTI_COLUMN,
      label: this.labels.tableOriginCity,
      columns: [
        {
          key: 'originCity',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableOriginCity,
          data: {
            key: 'cityNameFa',
          },
        },
        {
          key: 'originOffice',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableOriginOfficeName,
          data: {
            key: 'officeName',
          },
        },
      ],
    },

    {
      key: 'destinationCity',
      type: COLUMNS_TYPES.MULTI_COLUMN,
      label: this.labels.tableDestinationCity,
      columns: [
        {
          key: 'destinationCity',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableDestinationCity,
          data: {
            key: 'cityNameFa',
          },
        },
        {
          key: 'destinationOffice',
          type: COLUMNS_TYPES.SELECTOR,
          label: this.labels.tableDestinationOfficeName,
          data: {
            key: 'officeName',
          },
        },
      ],
    },

    {
      key: 'weight',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableWeight,
    },
    {
      key: 'totalItemsOfBill',
      type: COLUMNS_TYPES.MULTI_COLUMN,
      label: this.labels.tableTotalItemsOfBill,
      columns: [
        {
          key: 'itemNo',
          type: COLUMNS_TYPES.TEXT,
          label: this.labels.tableItemNo,
        },
        {
          key: 'totalItemsOfBill',
          type: COLUMNS_TYPES.TEXT,
          label: this.labels.tableTotalItemsOfBill,
        },
      ],
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableAction,
      data: [
        {
          key: 'label',
          title: this.labels.label,
          component: LabelIconComponent,
        },
        {
          key: 'print',
          title: this.labels.print,
          component: PrintIconComponent,
        },
        {
          key: 'offLoad',
          title: this.labels.offLoad,
          component: TrolleyIconComponent,
        },
      ],
    },
  ];

  get outgoingServices() {
    return this.outgoingServiceCS.itemsWatch;
  }

  searchTextInTable() {
    const data = this.outgoingServices.getValue();
    this.tableData.next(
      data.filter((saleReportByDate) => {
        return (
          saleReportByDate.billCode
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.serviceMinimal?.serviceCode
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.serviceMinimal?.carrier?.carrierNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.serviceMinimal?.serviceNo
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.serviceMinimal?.driver?.driverFullName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.serviceMinimal?.driver?.driverMobilePhone
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.billDateTime
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.receiverName
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.originCity?.cityNameFa
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.originOffice?.officeName
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.destinationCity?.cityNameFa
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.destinationOffice?.officeName
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.weight
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.itemNo
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.totalItemsOfBill
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }

  async getList() {
    this.loading = true;
    try {
      await this.outgoingServiceCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private router: Router,
    private niraModalService: NiraModalService,
    private outgoingServiceCS: OutgoingServiceCS
  ) {}

  async ngOnInit() {
    this.outgoingServices.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }
  onColumnClicked(data: { data: ServiceCargoDM; key: string }) {
    if (data.key === 'label') {
      this.niraModalService.open(PrintLabelDialogComponent, {
        data: {
          isBill: false,
          uniqueKey: data.data.id,
        },
      });
    } else if (data.key === 'print') {
      this.router.navigate([Links.invoice.route + '/' + data.data.billCode]);
    } else if (data.key === 'offLoad') {
      const modal = this.niraModalService.open(OffLoadModalComponent, {
        data: {
          isBill: false,
          uniqueKey: data.data.id,
        },
      });
      modal.afterClosed.subscribe((data) => {
        if (data) {
          this.getList();
        }
      });
    }
  }
}
