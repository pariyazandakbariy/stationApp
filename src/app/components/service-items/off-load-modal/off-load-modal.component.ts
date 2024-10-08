import { Component, Input } from '@angular/core';
import {
  IServiceItems,
  ServiceItemsLabels,
} from '../service-items/service-items.label';
import { Subject } from 'rxjs';
import { NiraModalConfig } from 'nira-modal';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ServiceApiService } from 'src/app/api/service-api.service';

@Component({
  selector: 'app-off-load-modal',
  templateUrl: './off-load-modal.component.html',
  styleUrls: ['./off-load-modal.component.scss'],
})
export class OffLoadModalComponent {
  labels =
    this.labelManagerService.getLabels<IServiceItems>(ServiceItemsLabels);

  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  loading = false;

  constructor(
    private labelManagerService: LabelManagerService,
    private serviceApi: ServiceApiService
  ) {}
  close() {
    this.closeSubject.next(false);
  }

  async confirm() {
    this.loading = true;
    try {
      await this.serviceApi.OffloadItems([this.config.data.uniqueKey]);
      this.closeSubject.next(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
}
