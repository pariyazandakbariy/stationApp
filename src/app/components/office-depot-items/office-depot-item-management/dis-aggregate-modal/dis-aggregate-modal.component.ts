import { Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { OfficeDepotItemApiService } from 'src/app/api/officeDepotItem-api.service';
import {
  IOfficeDepotItemManagement,
  Labels,
} from '../office-depot-item-management/office-depot-item-management.label';

@Component({
  selector: 'app-dis-aggregate-modal',
  templateUrl: './dis-aggregate-modal.component.html',
  styleUrls: ['./dis-aggregate-modal.component.scss'],
})
export class DisAggregateModalComponent {
  labels =
    this.labelManagerService.getLabels<IOfficeDepotItemManagement>(Labels);

  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  constructor(
    private labelManagerService: LabelManagerService,
    private officeDepotItemApi: OfficeDepotItemApiService
  ) {}
  close() {
    this.closeSubject.next('false');
  }
  async confirm() {
    try {
      await this.officeDepotItemApi.DisAggregateItems(
        this.config.data.billCode
      );
      this.closeSubject.next('true');
    } catch (error) {
      console.log(error);
    }
  }
}
