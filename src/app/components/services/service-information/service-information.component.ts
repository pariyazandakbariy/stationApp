import { Component } from '@angular/core';
import { Links } from 'src/app/utils/links';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { NiraModalService } from 'nira-modal';
import { Router } from '@angular/router';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { IServicesServiceNoLabel, Labels } from './service-information.label';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailViewers } from 'src/app/utils/types';

@Component({
  selector: 'app-service-information',
  templateUrl: './service-information.component.html',
  styleUrls: ['./service-information.component.scss'],
})
export class ServicesInformationComponent {
  labels = this.labelManagerService.getLabels<IServicesServiceNoLabel>(Labels);
  loading = false;
  serviceByDate: ServiceDM | undefined = undefined;
  serviceId = '';
  form: FormGroup = new FormGroup({
    serviceIdFormControl: new FormControl('', Validators.required),
  });
  get detailViewers() {
    return DetailViewers;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private serviceInformationApi: ServiceInformationApiService,
    private niraModalService: NiraModalService,
    private router: Router
  ) {}

  async onSubmit() {
    this.loading = true;
    try {
      this.serviceByDate = await this.serviceInformationApi.ServiceInformation(
        this.serviceId
      );
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
}
