import { Component } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { IManifestByIDLabel, Labels } from './manifest-by-manifest-id.label';
import { ManifestApiService } from 'src/app/api/manifest-api.service';
import ManifestDM from 'src/app/store/dataModels/manifestDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { BehaviorSubject } from 'rxjs';
import ServiceManifestDM from 'src/app/store/dataModels/serviceManifestDM';
import { DetailViewers } from 'src/app/utils/types';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';
import ManifestInformationDM from 'src/app/store/dataModels/manifestInformationDM';

@Component({
  selector: 'app-manifest-manifest-id',
  templateUrl: './manifest-by-manifest-id.component.html',
  styleUrls: ['./manifest-by-manifest-id.component.scss'],
})
export class ManifestByManifestIdComponent {
  labels = this.labelManagerService.getLabels<IManifestByIDLabel>(Labels);
  loading = false;
  manifest: ManifestInformationDM | undefined = undefined;
  code = '';
  tableData: BehaviorSubject<ServiceManifestDM[]> = new BehaviorSubject<
    ServiceManifestDM[]
  >([]);
  get detailViewers() {
    return DetailViewers;
  }
  columnsSchema = [
    {
      key: 'billCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableBillCode,
      detailViewer: {
        key: 'billCode',
        detailViewerComponent: BillDetailViewerComponent,
      },
    },
    {
      key: 'serviceFreightShare',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableServiceFreightShare,
    },
    {
      key: 'freightCollectAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableFreightCollectAmount,
    },
    {
      key: 'payToServiceAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tablePayToServiceAmount,
    },
    {
      key: 'receiveFromServiceAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableReceiveFromServiceAmount,
    },
  ];
  constructor(
    private labelManagerService: LabelManagerService,
    private manifestApi: ManifestApiService
  ) {}

  async onSubmit() {
    this.loading = true;
    try {
      const data = await this.manifestApi.manifest(this.code);
      this.manifest = data;
      this.tableData.next(data.serviceManifests);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
}
