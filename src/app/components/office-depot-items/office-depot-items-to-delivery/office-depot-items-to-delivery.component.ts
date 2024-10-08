import { Component } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { CoreSidePanel } from 'src/app/services/coreSidePanel.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { PrintIconComponent } from 'src/app/svg-icons/print-icon/print-icon.component';
import { OutboxIconComponent } from 'src/app/svg-icons/outbox-icon/outbox-icon.component';
import { Links } from 'src/app/utils/links';
import { Router } from '@angular/router';
import { NiraModalService } from 'nira-modal';
import OfficeDepotItemDM from 'src/app/store/dataModels/officeDepotItemDM';
import {
  IOfficeDepotItemContent,
  Labels,
} from './office-depot-items-to-delivery.label';
import { DisAggregateModalComponent } from '../office-depot-item-management/dis-aggregate-modal/dis-aggregate-modal.component';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { LabelIconComponent } from 'src/app/svg-icons/label-icon/label-icon.component';
import { ScannerModalComponent } from '../../dialogs/scaner-modal/scaner-modal.component';
import { NiraSnackBarService } from 'nira-snack-bar';
import { Util } from 'src/app/utils/util';
import { OfficeDepotItemToDeliveryCS } from 'src/app/store/componentStore/officeDepotItemToDeliveryCS';
import { ScannerMode } from 'src/app/utils/types';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';

@Component({
  selector: 'app-office-depot-items-to-delivery',
  templateUrl: './office-depot-items-to-delivery.component.html',
  styleUrls: ['./office-depot-items-to-delivery.component.scss'],
})
export class OfficeDepotItemsToDeliveryComponent {
  labels = this.labelManagerService.getLabels<IOfficeDepotItemContent>(Labels);
  tableData: BehaviorSubject<OfficeDepotItemDM[]> = new BehaviorSubject<
    OfficeDepotItemDM[]
  >([]);
  searchText: string = '';
  loading = false;
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
      key: 'receiverName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableReceiverName,
    },
    {
      key: 'billDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableBillDateTime,
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
      key: 'lastActionDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableLastActionDateTime,
    },
    {
      key: 'weight',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableWeight,
    },
    {
      key: 'itemNo',
      type: COLUMNS_TYPES.MULTI_COLUMN,
      label: this.labels.tableItemNo,
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
      key: 'isLeftPayment',
      type: COLUMNS_TYPES.STATUS_ACTIVE,
      label: this.labels.tableLeftPayment,
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
          key: 'disAggregate',
          title: this.labels.disAggregate,
          component: OutboxIconComponent,
          filter: (officeDepotItem: OfficeDepotItemDM) => {
            return officeDepotItem.isMasterBill;
          },
        },
      ],
    },
  ];

  get officeDepotItemsToDelivery() {
    return this.officeDepotItemToDeliveryCS.itemsWatch;
  }

  styleFilter = (officeDepotItem: OfficeDepotItemDM) => {
    return officeDepotItem.isMasterBill ? 'bg-master-bill-color' : '';
  };
  get isRunningOnSmallScreen() {
    return Util.isRunningOnSmallScreen();
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private officeDepotItemToDeliveryCS: OfficeDepotItemToDeliveryCS,
    private router: Router,
    private niraSnackBar: NiraSnackBarService,
    private niraModalService: NiraModalService
  ) {}

  async getList() {
    this.loading = true;
    try {
      await this.officeDepotItemToDeliveryCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
  searchTextInTable() {
    const data = this.officeDepotItemsToDelivery.getValue();
    this.tableData.next(
      data.filter((officeDepotItem) => {
        return (
          officeDepotItem.billCode
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.itemNo
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.receiverName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.originCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.destinationCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.destinationOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          officeDepotItem.originOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }
  ngOnInit(): void {
    this.officeDepotItemsToDelivery.subscribe(() => {
      this.searchTextInTable();
    });
    this.getList();
  }

  onColumnClicked(data: { data: OfficeDepotItemDM; key: string }) {
    if (data.key === 'label') {
      this.niraModalService.open(PrintLabelDialogComponent, {
        data: {
          isBill: false,
          uniqueKey: data.data.itemUniqueKey,
        },
      });
    } else if (data.key === 'print') {
      this.router.navigate([Links.invoice.route + '/' + data.data.billCode]);
    } else if (data.key === 'disAggregate') {
      const modal = this.niraModalService.open(DisAggregateModalComponent, {
        data: data.data,
      });
      modal.afterClosed.subscribe((data) => {
        if (data === 'true') {
          this.getList();
        }
      });
    }
  }

  onScannerClick() {
    const onEvent: Subject<string> = new Subject<string>();
    this.niraModalService.open(ScannerModalComponent, {
      data: { onEvent: onEvent, scannerMode: ScannerMode.PACK },
      outsideClose: false,
    });

    onEvent.subscribe((id) => {
      const officeDepotItems = this.officeDepotItemsToDelivery.getValue();
      const index = officeDepotItems.findIndex(
        (officeDepotItem) => officeDepotItem.itemUniqueKey === id
      );
      if (index >= 0) {
        // todo .......................................................
      } else {
        this.niraSnackBar.show('یافت نشد', {
          statusClass: 'error',
          duration: 3000,
        });
      }
    });
  }
}
