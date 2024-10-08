import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import DriverDM from 'src/app/store/dataModels/driverDM';
import { Gender } from 'src/app/utils/constants';
import { ConfirmDialog } from 'src/app/utils/types';
import { IDriversLabel, Labels } from '../drivers/drivers.label';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss'],
})
export class DriverFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: IDriversLabel =
    this.labelManagerService.getLabels<IDriversLabel>(Labels);
  gender: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(Gender);
  driver: DriverDM = new DriverDM();
  loading = false;
  loadingDelete = false;
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  selectedCityKey: string | null = null;

  myForm: FormGroup = new FormGroup({
    formControlFirstName: new FormControl('', Validators.required),
    formControlLastName: new FormControl('', Validators.required),
    formControlNationalCode: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    formControlGender: new FormControl('', Validators.required),
    formControlMobilePhone: new FormControl('', [
      Validators.required,
      Validators.pattern('^09[0-9]{9}$'),
    ]),
  });

  get drivers() {
    return this.driverCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private driverCS: DriverCS
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.config.data) {
      const driver = this.driverCS.items.find(
        (driver) => driver.driverId === this.config.data.data.driverId
      );
      if (driver) {
        this.driver = cloneDeep(driver);
      }

      this.myForm.setValue({
        formControlFirstName: this.driver.firstName,
        formControlLastName: this.driver.lastName,
        formControlNationalCode: this.driver.nationalCode,
        formControlGender: this.driver.gender.value,
        formControlMobilePhone: this.driver.mobilePhone,
      });
    }
  }

  async delete() {
    this.loadingDelete = true;
    try {
      await this.driverCS.delete(this.driver);
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
          await this.driverCS.edit(this.driver);
        } else {
          await this.driverCS.add(this.driver);
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
