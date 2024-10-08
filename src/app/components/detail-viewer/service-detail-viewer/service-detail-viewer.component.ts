import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig, NiraModalService } from 'nira-modal';
import { Subject } from 'rxjs';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { GenerateServiceComponent } from '../../office-depot-items/office-depot-item-management/generate-service/generate-service.component';
import { IServiceDetailViewer, Labels } from './service-detail-viewer.label';
import { ErrorType } from 'src/app/utils/types';

@Component({
  selector: 'app-service-detail-viewer',
  templateUrl: './service-detail-viewer.component.html',
  styleUrls: ['./service-detail-viewer.component.scss'],
})
export class ServiceDetailViewerComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  service: ServiceDM | undefined = undefined;
  labels = this.labelManagerService.getLabels<IServiceDetailViewer>(Labels);
  loading = false;
  error: ErrorType | undefined = undefined;

  constructor(
    private labelManagerService: LabelManagerService,
    private serviceInformationApi: ServiceInformationApiService,
    private niraModalService: NiraModalService
  ) {}

  ngOnInit(): void {
    this.getServiceInformation();
  }

  async getServiceInformation() {
    this.loading = true;
    try {
      this.service = await this.serviceInformationApi.ServiceInformation(
        this.config.data
      );
    } catch (error: any) {
      this.error = error.error;
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
  updateService() {
    const dialog = this.niraModalService.open(GenerateServiceComponent, {
      data: { service: this.service },
    });
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getServiceInformation();
      }
    });
  }
}
