import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { TraditionalManifestCS } from 'src/app/store/componentStore/traditinalManifestCS';
import TraditionalManifestItemDM from 'src/app/store/dataModels/traditionalManifestItemDM';
import { ConfirmDialog } from 'src/app/utils/types';
import {
  ITraditionalManifestFormLabel,
  Labels,
} from './traditional-manifest-item-form.label';
import { cloneDeep } from 'lodash';
import { TraditionalManifestItemCS } from 'src/app/store/componentStore/traditinalManifestItemCS';
import { Util } from 'src/app/utils/util';
@Component({
  selector: 'app-traditional-manifest-item-form',
  templateUrl: './traditional-manifest-item-form.component.html',
  styleUrls: ['./traditional-manifest-item-form.component.scss'],
})
export class TraditionalManifestItemFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: ITraditionalManifestFormLabel =
    this.labelManagerService.getLabels<ITraditionalManifestFormLabel>(Labels);

  traditionalManifestItem: TraditionalManifestItemDM =
    new TraditionalManifestItemDM();
  loading = false;
  loadingClearForm = false;
  loadingDelete = false;
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  selectedCityKey: string | null = null;

  myForm: FormGroup | undefined;

  constructor(
    private labelManagerService: LabelManagerService,
    private traditionalManifestItemCS: TraditionalManifestItemCS
  ) {}

  async ngOnInit(): Promise<void> {
    this.registerForm();
    if (this.config.data)
      this.traditionalManifestItem.traditionalManifestCode =
        this.config.data.traditionalManifestCode;
    if (this.config.data.data) {
      this.traditionalManifestItem = this.config.data.data.data;
      this.myForm;
      this.myForm?.setValue({
        formControlBillCode: this.traditionalManifestItem.billNumber,
        formControlDate: this.traditionalManifestItem.billDate,
        formControlItemCount: this.traditionalManifestItem.itemCount,
        formControlName: this.traditionalManifestItem.receiverFullName,

        formControlPhoneNumber:
          this.traditionalManifestItem.receiverMobilePhone,
        formControlTotalPrice:
          this.traditionalManifestItem.priceToCollectAmount,
        formControlDescription: this.traditionalManifestItem.description,

        formControlCityServicesAmount:
          this.traditionalManifestItem.cityServicesAmount,
        formControlExtraServicesAmount:
          this.traditionalManifestItem.extraServicesAmount,
        formControlTransitServicesAmount:
          this.traditionalManifestItem.transitServicesAmount,
        formControlPrepaymentAmount:
          this.traditionalManifestItem.prepaymentAmount,
      });
    }
  }
  async registerForm() {
    this.myForm = new FormGroup({
      formControlBillCode: new FormControl('', Validators.required),
      formControlDate: new FormControl('', Validators.required),
      formControlItemCount: new FormControl('', Validators.required),
      formControlName: new FormControl('', Validators.required),

      formControlCityServicesAmount: new FormControl('', Validators.required),
      formControlExtraServicesAmount: new FormControl('', Validators.required),
      formControlTransitServicesAmount: new FormControl(
        '',
        Validators.required
      ),
      formControlPrepaymentAmount: new FormControl('', Validators.required),

      formControlPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      formControlTotalPrice: new FormControl('', Validators.required),
      formControlDescription: new FormControl(''),
    });
  }
  async submitBtn() {
    this.loading = true;
    const isSuccess = await this.submit();
    if (isSuccess) this.close('true');
    this.loading = false;
  }
  async submitAndClearForm() {
    this.loadingClearForm = true;
    const isSuccess = await this.submit();
    if (isSuccess) this.clearForm();
    this.loadingClearForm = false;
  }

  async clearForm() {
    this.registerForm();
    this.traditionalManifestItem = new TraditionalManifestItemDM();
    this.traditionalManifestItem.traditionalManifestCode =
      this.config.data.traditionalManifestCode;
  }
  async submit(): Promise<boolean> {
    if (this.myForm?.valid) {
      this.traditionalManifestItem.billDate = Util.shamsiToMiladi(
        this.myForm.controls['formControlDate'].value,
        'YYYY-MM-DD'
      );

      try {
        if (this.config.data.data) {
          await this.traditionalManifestItemCS.edit(
            this.traditionalManifestItem
          );
        } else {
          await this.traditionalManifestItemCS.add(
            this.traditionalManifestItem
          );
        }
        return true;
      } catch (error) {
        console.error(error);
      }
    }
    return false;
  }

  async delete() {
    this.loadingDelete = true;
    try {
      await this.traditionalManifestItemCS.delete(this.traditionalManifestItem);
      this.close('true');
    } catch (error) {
      console.error(error);
    }
    this.loadingDelete = false;
  }

  close(data: string) {
    this.closeSubject.next('true');
  }
}
