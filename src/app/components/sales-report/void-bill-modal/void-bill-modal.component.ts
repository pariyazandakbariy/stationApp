import { Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { IVoidBill, Labels } from './void-bill.label';
import { VoidBillApiService } from 'src/app/api/voidBill-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-void-bill-modal',
  templateUrl: './void-bill-modal.component.html',
  styleUrls: ['./void-bill-modal.component.scss'],
})
export class VoidBillModalComponent {
  labels = this.labelManagerService.getLabels<IVoidBill>(Labels);

  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  voidBillForm: FormGroup = new FormGroup({
    commentVoidBill: new FormControl('', Validators.required),
  });
  constructor(
    private labelManagerService: LabelManagerService,
    private voidBillApi: VoidBillApiService
  ) {}

  close() {
    this.closeSubject.next('true');
  }
  async confirm() {
    try {
      await this.voidBillApi.VoidBill({
        billCode: this.config.data,
        commentVoidBill: this.voidBillForm.value.commentVoidBill,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.closeSubject.next('true');
    }
  }
}
