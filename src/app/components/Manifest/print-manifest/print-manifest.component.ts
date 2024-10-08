import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManifestApiService } from 'src/app/api/manifest-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import ManifestDM from 'src/app/store/dataModels/manifestDM';
import {
  IManifestByIDLabel,
  Labels,
} from '../manifest-by-manifest-id/manifest-by-manifest-id.label';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import ManifestInformationDM from 'src/app/store/dataModels/manifestInformationDM';

export interface ErrorType {
  description_en: string;
  description_fa: string;
  errorCode: number;
}

@Component({
  selector: 'app-print-manifest',
  templateUrl: './print-manifest.component.html',
  styleUrls: ['./print-manifest.component.css'],
})
export class PrintManifestComponent {
  labels = this.labelManagerService.getLabels<IManifestByIDLabel>(Labels);
  manifestData: ManifestInformationDM | undefined;
  manifestId: string = '';
  error: ErrorType | undefined = undefined;
  loading = false;
  totalPayToServiceAmount = 0;
  totalReceiveFromServiceAmount = 0;
  totalServiceFreightShare = 0;
  totalFreightCollectAmount = 0;
  get myInfo() {
    return this.applicationDS.myInfo;
  }
  constructor(
    private applicationDS: ApplicationDS,
    private manifestApi: ManifestApiService,
    private route: ActivatedRoute,
    private labelManagerService: LabelManagerService
  ) {}
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('manifestId');
    if (routeParam) {
      this.manifestId = routeParam;
      this.getManifestInformationApiService(this.manifestId);
    }
  }

  async getManifestInformationApiService(manifestId: string) {
    this.loading = true;
    try {
      this.manifestData = await this.manifestApi.manifest(manifestId);
      this.totalPayToServiceAmount = this.manifestData.serviceManifests.reduce(
        (acc: any, val: any) => acc + Number(val.payToServiceAmount),
        0
      );
      this.totalReceiveFromServiceAmount =
        this.manifestData.serviceManifests.reduce(
          (acc: any, val: any) => acc + Number(val.receiveFromServiceAmount),
          0
        );
      this.totalServiceFreightShare = this.manifestData.serviceManifests.reduce(
        (acc: any, val: any) => acc + Number(val.serviceFreightShare),
        0
      );
      this.totalFreightCollectAmount =
        this.manifestData.serviceManifests.reduce(
          (acc: any, val: any) => acc + Number(val.freightCollectAmount),
          0
        );
    } catch (error: any) {
      this.error = error.error;
    }
    this.loading = false;
  }
}
