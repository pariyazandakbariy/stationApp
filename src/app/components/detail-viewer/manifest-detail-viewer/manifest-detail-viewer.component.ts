import { Component, Input } from '@angular/core';
import { Links } from 'src/app/utils/links';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Router } from '@angular/router';
import { NiraModalConfig } from 'nira-modal';
import { Subject, BehaviorSubject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import {
  IManifestDetailViewerLabel,
  Labels,
} from './manifest-detail-viewer.label';
import ManifestDM from 'src/app/store/dataModels/manifestDM';
import ServiceManifestDM from 'src/app/store/dataModels/serviceManifestDM';
import { ManifestApiService } from 'src/app/api/manifest-api.service';
import ManifestInformationDM from 'src/app/store/dataModels/manifestInformationDM';
import { DetailViewers } from 'src/app/utils/types';
import { BillDetailViewerComponent } from '../bill-detail-viewer/bill-detail-viewer.component';

export interface ErrorType {
  description_en: string;
  description_fa: string;
  errorCode: number;
}
@Component({
  selector: 'app-manifest-detail-viewer',
  templateUrl: './manifest-detail-viewer.component.html',
  styleUrls: ['./manifest-detail-viewer.component.scss'],
})
export class ManifestDetailViewerComponent {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels =
    this.labelManagerService.getLabels<IManifestDetailViewerLabel>(Labels);
  loading = false;
  error: ErrorType | undefined = undefined;
  manifest: ManifestInformationDM = new ManifestInformationDM();
  totalPayToServiceAmount = 0;
  totalReceiveFromServiceAmount = 0;
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
    private manifestApi: ManifestApiService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getManifestInformation(this.config.data);
  }

  async getManifestInformation(manifestId: string) {
    this.loading = true;
    try {
      const data = await this.manifestApi.manifest(manifestId);
      this.manifest = data;
      this.tableData.next(data.serviceManifests);
      this.totalPayToServiceAmount = data.serviceManifests.reduce(
        (acc: any, val: any) => acc + Number(val.payToServiceAmount),
        0
      );
      this.totalReceiveFromServiceAmount = data.serviceManifests.reduce(
        (acc: any, val: any) => acc + Number(val.receiveFromServiceAmount),
        0
      );
    } catch (error: any) {
      this.error = error;
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }

  onPrintBillBtnClicked() {
    this.close('false');
    this.router.navigate([
      Links.printManifest.route + '/' + this.manifest.manifestId,
    ]);
  }
}
