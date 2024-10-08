import { Component } from '@angular/core';
import { IServicesByDate, Labels } from './services-by-date.label';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Util } from 'src/app/utils/util';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { Router } from '@angular/router';
import { NiraModalService } from 'nira-modal';
import { ServiceByDateCS } from 'src/app/store/componentStore/serviceByDateCS';
import { ServiceDetailViewerComponent } from '../../detail-viewer/service-detail-viewer/service-detail-viewer.component';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { DriverDetailViewerComponent } from '../../detail-viewer/driver-detail-viewer/driver-detail-viewer.component';
import { GenerateServiceComponent } from '../../office-depot-items/office-depot-item-management/generate-service/generate-service.component';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';
import GenerateServiceDM from 'src/app/store/dataModels/generateServiceDM';

@Component({
  selector: 'app-services-by-date',
  templateUrl: './services-by-date.component.html',
  styleUrls: ['./services-by-date.component.scss'],
})
export class ServicesByDateComponent {
  labels = this.labelManagerService.getLabels<IServicesByDate>(Labels);
  searchText: string = '';
  loading = false;
  serviceByDateForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  tableData: BehaviorSubject<ServiceDM[]> = new BehaviorSubject<ServiceDM[]>(
    []
  );
  columnsSchema = [
    {
      key: 'serviceId',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableServiceId,
      copyToClipboard: true,
    },
    {
      key: 'serviceNo',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableServiceNo,
      copyToClipboard: true,
    },
    {
      key: 'departureDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableDepartureDateTime,
    },

    {
      key: 'vehicleType',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableVehicleType,
      data: {
        key: 'vehicleTypeNameFa',
      },
    },
    {
      key: 'carrier',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableCarrier,
      data: {
        key: 'carrierNameFa',
      },
    },
    {
      key: 'durationMinutes',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableDurationMinutes,
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
          label: this.labels.tableOriginOffice,
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
          label: this.labels.tableDestinationOffice,
          data: {
            key: 'officeName',
          },
        },
      ],
    },
    {
      key: 'driver',
      type: COLUMNS_TYPES.SELECTOR,
      data: {
        key: 'driverFullName',
      },
      label: this.labels.tableDriverFullName,
      detailViewer: {
        key: 'driverCode',
        detailViewerComponent: DriverDetailViewerComponent,
      },
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableAction,
      data: [
        {
          title: this.labels.edit,
          component: EditSquareIconComponent,
        },
      ],
    },
  ];

  get serviceByDateList() {
    return this.serviceByDateCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.serviceByDateList.getValue();
    this.tableData.next(
      data.filter((serviceByDate) => {
        return (
          serviceByDate.serviceNo
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.vehicleType?.vehicleTypeNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.carrier?.carrierNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.durationMinutes
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.originCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.destinationCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.originOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.destinationOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.driver?.driverFullName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          serviceByDate.driver?.driverMobilePhone
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }
  async getList() {
    this.loading = true;
    try {
      await this.serviceByDateCS.doLoad(true, {
        fromDate: Util.shamsiToMiladi(
          this.serviceByDateForm.controls['fromDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        toDate: Util.shamsiToMiladi(
          this.serviceByDateForm.controls['toDateFormControl'].value,
          'YYYY-MM-DD'
        ),
      });
    } catch (error) {
      console.log(error);
      if (error === '204') {
        this.serviceByDateCS.deleteAllItems();
      }
    }
    this.loading = false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private serviceByDateCS: ServiceByDateCS,
    private router: Router,
    private niraModalService: NiraModalService
  ) {}

  async ngAfterViewInit(): Promise<void> {
    this.serviceByDateList.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }

  openFormModal() {
    this.niraModalService.open(GenerateServiceComponent);
  }

  onColumnClicked(data: { data: GenerateServiceDM; key: string }) {
    const dialog = this.niraModalService.open(GenerateServiceComponent, {
      data: { service: data.data },
      outsideClose: false,
    });
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
  onSubmit() {
    this.getList();
  }
}
