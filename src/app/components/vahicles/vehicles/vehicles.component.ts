import { Component, OnInit } from '@angular/core';
import { NiraModalService } from 'nira-modal';
import { BehaviorSubject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { VehicleCS } from 'src/app/store/componentStore/vehicleCS';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';
import { IVehiclesLabel, Labels } from './vehicles.label';
import { SettlementOfficeDebtToVehicleComponent } from '../settlement-office-debt-to-vehicle/settlement-office-debt-to-vehicle.component';
import { SettlementVehicleDebtToOfficeComponent } from '../settlement-vehicle-debt-to-office/settlement-vehicle-debt-to-office.component';
import { AddCardIconComponent } from 'src/app/svg-icons/add-card-icon/add-card-icon.component';
import { PaymentsIconComponent } from 'src/app/svg-icons/payments-icon/payments-icon.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  labels: IVehiclesLabel =
    this.labelManagerService.getLabels<IVehiclesLabel>(Labels);
  searchText: string = '';
  loading = false;
  tableData: BehaviorSubject<VehicleDM[]> = new BehaviorSubject<VehicleDM[]>(
    []
  );
  columnsSchema = [
    {
      key: 'ownerFullName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderOwnerFullName,
    },
    {
      key: 'ownerMobilePhone',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderOwnerMobilePhone,
    },
    {
      key: 'vehicleType',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderVehicleType,
      data: {
        key: 'vehicleTypeNameFa',
      },
    },
    {
      key: 'carrier',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderCarrier,
      data: {
        key: 'carrierNameFa',
      },
    },
    {
      key: 'registerFormat',
      type: COLUMNS_TYPES.PELAK,
      label: this.labels.tableHeaderRegister,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableAction,
      data: [
        {
          key: 'edit',
          title: this.labels.edit,
          component: EditSquareIconComponent,
        },
        {
          key: 'settlementOffice',
          title: this.labels.settlementOffice,
          component: PaymentsIconComponent,
        },
        {
          key: 'settlementVehicle',
          title: this.labels.settlementVehicle,
          component: AddCardIconComponent,
        },
      ],
    },
  ];
  get vehicles() {
    return this.vehicleCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.vehicles.getValue();
    this.tableData.next(
      data.filter((vehicle: VehicleDM) => {
        return (
          vehicle.ownerFullName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          vehicle.ownerMobilePhone
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          vehicle.carrier?.carrierNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          vehicle.pelak
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          vehicle.vehicleType?.vehicleTypeNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private vehicleCS: VehicleCS
  ) {}
  async ngOnInit() {
    this.vehicles.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }
  async getList() {
    this.loading = true;
    try {
      await this.vehicleCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
  onColumnClicked(data: { data: VehicleDM; key: string }) {
    if (data.key === 'edit') {
      const dialog = this.niraModalService.open(VehicleFormComponent, {
        data: data,
      });
      dialog.afterClosed.subscribe((data) => {
        if (data === 'true') {
          this.getList();
        }
      });
    } else if (data.key === 'settlementOffice') {
      this.niraModalService.open(SettlementOfficeDebtToVehicleComponent, {
        data: data,
      });
    } else if (data.key === 'settlementVehicle') {
      this.niraModalService.open(SettlementVehicleDebtToOfficeComponent, {
        data: data,
      });
    }
  }
  openFormModal() {
    const dialog = this.niraModalService.open(VehicleFormComponent);
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
}
