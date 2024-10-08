import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import SettlementVehicleDebtToOfficeDM from 'src/app/store/dataModels/settlementVehicleDebtToOfficeDM';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { VehicleCS } from 'src/app/store/componentStore/vehicleCS';
import { SettlementApiService } from 'src/app/api/settlement-api.service';
import { cloneDeep } from 'lodash';
import { Util } from 'src/app/utils/util';
import {
  ISettlementOfficeDebtToVehicleLabel,
  SettlementOfficeDebtToVehicleLabels,
} from './settlementOfficeDebtToVehicle.label';

@Component({
  selector: 'app-settlement-office-debt-to-vehicle',
  templateUrl: './settlement-office-debt-to-vehicle.component.html',
  styleUrls: ['./settlement-office-debt-to-vehicle.component.scss'],
})
export class SettlementOfficeDebtToVehicleComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: ISettlementOfficeDebtToVehicleLabel =
    this.labelManagerService.getLabels<ISettlementOfficeDebtToVehicleLabel>(
      SettlementOfficeDebtToVehicleLabels
    );
  loading = false;
  vehicle: VehicleDM = new VehicleDM();

  settlementVehicleDebtToOffice: SettlementVehicleDebtToOfficeDM =
    new SettlementVehicleDebtToOfficeDM();
  selectedCityKey: string | null = null;
  myForm: FormGroup = new FormGroup({
    formControlDescription: new FormControl(''),
    formControlAmount: new FormControl('', Validators.required),
    formControlReceiptNo: new FormControl('', Validators.required),
    formControlDate: new FormControl('', Validators.required),
  });

  constructor(
    private labelManagerService: LabelManagerService,
    private vehicleCS: VehicleCS,
    private SettlementApi: SettlementApiService
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.config.data) {
      const vehicle = this.vehicleCS.items.find(
        (vehicle) => vehicle.vehicleId === this.config.data.data.vehicleId
      );
      if (vehicle) {
        this.vehicle = cloneDeep(vehicle);
        this.settlementVehicleDebtToOffice.vehicleCode = vehicle.id;
      }
    }
  }

  async submitBtn() {
    if (this.myForm.valid) {
      this.loading = true;
      this.settlementVehicleDebtToOffice.paymentDate = Util.shamsiToMiladi(
        this.myForm.controls['formControlDate'].value,
        'YYYY-MM-DD'
      );
      try {
        await this.SettlementApi.SettlementOfficeDebtToVehicle(
          this.settlementVehicleDebtToOffice
        );
        this.close('true');
      } catch (error) {
        console.error(error);
      }
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
}
