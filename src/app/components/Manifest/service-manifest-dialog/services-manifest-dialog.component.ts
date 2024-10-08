import { Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { OfficeDepotItemToTransferCS } from 'src/app/store/componentStore/officeDepotItemToTransferCS';
import ServiceManifestDM from 'src/app/store/dataModels/serviceManifestDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import {
  IServiceManifestDialogLabel,
  Labels,
} from './services-manifest-dialog.label';
import { ManifestApiService } from 'src/app/api/manifest-api.service';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';

@Component({
  selector: 'app-services-manifest-dialog',
  templateUrl: './services-manifest-dialog.component.html',
  styleUrls: ['./services-manifest-dialog.component.scss'],
})
export class ServicesManifestDialogComponent {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  loading = false;
  selectedServiceId = 0;
  totalPayToServiceAmount = 0;
  totalReceiveFromServiceAmount = 0;
  manifestCode = 0;
  tableData: BehaviorSubject<ServiceManifestDM[]> = new BehaviorSubject<
    ServiceManifestDM[]
  >([]);
  labels: IServiceManifestDialogLabel =
    this.labelManagerService.getLabels<IServiceManifestDialogLabel>(Labels);
  columnsSchema = [
    {
      key: 'billCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderId,
      detailViewer: {
        key: 'billCode',
        detailViewerComponent: BillDetailViewerComponent,
      },
    },
    {
      key: 'serviceFreightShare',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableHeaderServiceFreightShare,
    },
    {
      key: 'freightCollectAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableHeaderFreightCollectAmount,
    },
    {
      key: 'payToServiceAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableHeaderPayToServiceAmount,
    },
    {
      key: 'receiveFromServiceAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableHeaderReceiveFromServiceAmount,
    },
  ];
  get selectedAggregationItems() {
    return this.officeDepotItemCS.selectedAggregationItems;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private officeDepotItemCS: OfficeDepotItemToTransferCS
  ) {}

  async ngOnInit() {
    const serviceManifests = this.config.data.serviceManifests;
    this.tableData.next(serviceManifests);
    this.totalPayToServiceAmount = serviceManifests.reduce(
      (acc: any, val: any) => acc + Number(val.payToServiceAmount),
      0
    );
    this.totalReceiveFromServiceAmount = serviceManifests.reduce(
      (acc: any, val: any) => acc + Number(val.receiveFromServiceAmount),
      0
    );
  }

  close() {
    this.closeSubject.next('true');
  }
}
