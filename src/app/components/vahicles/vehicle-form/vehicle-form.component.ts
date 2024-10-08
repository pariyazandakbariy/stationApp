import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { cloneDeep } from 'lodash';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { CarrierCS } from 'src/app/store/componentStore/carrierCS';
import { VehicleCS } from 'src/app/store/componentStore/vehicleCS';
import { VehicleTypeCS } from 'src/app/store/componentStore/vehicleTypeCS';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import { ConfirmDialog } from 'src/app/utils/types';
import { IVehiclesLabel, Labels } from '../vehicles/vehicles.label';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: IVehiclesLabel =
    this.labelManagerService.getLabels<IVehiclesLabel>(Labels);
  vehicle: VehicleDM = new VehicleDM();
  loading = false;
  loadingDelete = false;
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  selectedCityKey: string | null = null;
  validatorPelak: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.includes('_') ? { validatorPelak: true } : null;
  };
  myForm: FormGroup = new FormGroup({
    formControlOwnerFullName: new FormControl('', Validators.required),
    formControlOwnerMobilePhone: new FormControl('', [
      Validators.required,
      Validators.pattern('^09[0-9]{9}$'),
    ]),
    formControlCarrier: new FormControl('', Validators.required),
    formControlVehicleType: new FormControl('', Validators.required),
    formControlRegister: new FormControl('', [
      this.validatorPelak,
      Validators.required,
    ]),
  });

  get vehicles() {
    return this.vehicleCS.itemsWatch;
  }
  get carriers() {
    return this.carrierCS.itemsWatch;
  }

  get vehicleTypes() {
    return this.vehicleTypeCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private vehicleCS: VehicleCS,
    private vehicleTypeCS: VehicleTypeCS,
    private carrierCS: CarrierCS
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.config.data) {
      const vehicle = this.vehicleCS.items.find(
        (vehicle) => vehicle.vehicleId === this.config.data.data.vehicleId
      );
      if (vehicle) {
        this.vehicle = cloneDeep(vehicle);
      }

      this.myForm.setValue({
        formControlOwnerFullName: this.vehicle.ownerFullName,
        formControlOwnerMobilePhone: this.vehicle.ownerMobilePhone,
        formControlCarrier: this.vehicle.carrier,
        formControlVehicleType: this.vehicle.vehicleType,
        formControlRegister: this.vehicle.register,
      });
    }
  }

  async delete() {
    this.loadingDelete = true;
    try {
      await this.vehicleCS.delete(this.vehicle);
      this.close('true');
    } catch (error) {
      console.error(error);
    }
    this.loadingDelete = false;
  }

  async submitBtn() {
    if (this.myForm.valid) {
      this.loading = true;

      try {
        if (this.config.data) {
          await this.vehicleCS.edit(this.vehicle);
        } else {
          await this.vehicleCS.add(this.vehicle);
        }
      } catch (error) {
        console.error(error);
      }
      this.close('true');
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
}
