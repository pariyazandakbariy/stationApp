import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { Subject } from 'rxjs';
import { OfficeDepotItemApiService } from 'src/app/api/officeDepotItem-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import {
  IOfficeDepotItemsDeliveryFormLabel,
  Labels,
} from './office-depot-items-delivery-form-dialog.label';
import BillInformationDM from 'src/app/store/dataModels/billInformationDM';

@Component({
  selector: 'app-office-depot-items-delivery-form-dialog',
  templateUrl: './office-depot-items-delivery-form-dialog.component.html',
  styleUrls: ['./office-depot-items-delivery-form-dialog.component.scss'],
})
export class OfficeDepotItemsDeliveryFormDialogComponent {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: IOfficeDepotItemsDeliveryFormLabel =
    this.labelManagerService.getLabels<IOfficeDepotItemsDeliveryFormLabel>(
      Labels
    );
  fullName = '';
  idNumber = '';
  chargeAmount = '';
  daysInWareHouse = '';
  courierAmount = '';
  wareHouseCostAmount = '';
  billCode = '';
  loading = false;
  bill:BillInformationDM | undefined;

  selectedCityKey: string | null = null;

  myForm: FormGroup = new FormGroup({
    formControlFullName: new FormControl('', Validators.required),
    formControlIdNumber: new FormControl('', Validators.required),
    formControlCourierAmount: new FormControl('0', Validators.required),
    formControlWareHouseCostAmount: new FormControl('0', Validators.required),
    formControlChargeAmount: new FormControl('0', []),
  });

  constructor(
    private labelManagerService: LabelManagerService,
    private niraSnackBar: NiraSnackBarService,
    private officeDepotItemApiService: OfficeDepotItemApiService
  ) {}

  ngOnInit(): void {
    if (this.config.data) {
      this.billCode = this.config.data.bill.bill.billCode;
      this.bill = this.config.data.bill
    }
  }

  async submitBtn() {
    if (this.myForm.valid) {
      this.loading = true;

      try {
        await this.officeDepotItemApiService.CompleteOperation(
          this.billCode,
          this.fullName,
          this.idNumber,
          +this.daysInWareHouse,
          +this.chargeAmount,
          +this.courierAmount,
          +this.wareHouseCostAmount
        );
        this.loading = false;
        this.close('true');
      } catch (error) {
        this.loading = false;
        let message = '';
        if (typeof error === 'string') {
          message = error.toString();
        } else if (error instanceof Error) {
          message = error.message;
        }
        this.niraSnackBar.show(message, {
          statusClass: 'error',
          duration: 3000,
        });
      }
    }
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
}
