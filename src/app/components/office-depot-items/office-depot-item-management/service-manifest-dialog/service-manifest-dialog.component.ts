import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { GenerateServiceApiService } from 'src/app/api/generateService-api.service';
import { CoreSidePanel } from 'src/app/services/coreSidePanel.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { OfficeDepotItemToTransferCS } from 'src/app/store/componentStore/officeDepotItemToTransferCS';
import ServiceManifestDM from 'src/app/store/dataModels/serviceManifestDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { BillDetailViewerComponent } from 'src/app/components/detail-viewer/bill-detail-viewer/bill-detail-viewer.component';
import {
  IServiceManifestDialogLabel,
  Labels,
} from './service-manifest-dialog.label';
import { ConfirmDialog } from 'src/app/utils/types';

@Component({
  selector: 'app-service-manifest-dialog',
  templateUrl: './service-manifest-dialog.component.html',
  styleUrls: ['./service-manifest-dialog.component.scss'],
})
export class ServiceManifestDialogComponent {
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

  voidConfirmDialog: ConfirmDialog = {
    title: this.labels.voidConfirmDialogTitle,
    text: this.labels.voidConfirmDialogText,
    cancelBtn: this.labels.voidConfirmDialogCancelBtn,
    confirmBtn: this.labels.voidConfirmDialogConfirmBtn,
  };
  boardConfirmDialog: ConfirmDialog = {
    title: this.labels.boardConfirmDialogTitle,
    text: this.labels.boardConfirmDialogText,
    cancelBtn: this.labels.boardConfirmDialogCancelBtn,
    confirmBtn: this.labels.boardConfirmDialogConfirmBtn,
  };

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
    private cdr: ChangeDetectorRef,
    private officeDepotItemCS: OfficeDepotItemToTransferCS,
    private generateServiceApiService: GenerateServiceApiService,
    private coreSidePanel: CoreSidePanel,
    private niraSnackBar: NiraSnackBarService
  ) {}

  ngOnInit(): void {
    this.manifestCode = this.config.data.generateServiceManifests.manifestId;
    const serviceManifests =
      this.config.data.generateServiceManifests.serviceManifests;
    this.tableData.next(serviceManifests);
    this.totalPayToServiceAmount = serviceManifests.reduce(
      (acc: any, val: any) => acc + Number(val.payToServiceAmount),
      0
    );
    this.totalReceiveFromServiceAmount = serviceManifests.reduce(
      (acc: any, val: any) => acc + Number(val.receiveFromServiceAmount),
      0
    );
    this.selectedServiceId = this.config.data.selectedServiceId;
  }

  async onBoardItemsSubmit() {
    this.loading = true;
    const uniqueKeys = this.selectedAggregationItems
      .getValue()
      .map((officeDepotItem) => officeDepotItem.itemUniqueKey);
    try {
      const data: any = await this.generateServiceApiService.BoardItems(
        this.manifestCode,
        uniqueKeys,
        this.selectedServiceId
      );
      this.loading = false;
      this.coreSidePanel.afterClosed.next('close');
      this.coreSidePanel.closeAll();
      this.close();
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
  async voidManifest() {
    this.loading = true;
    try {
      await this.generateServiceApiService.VoidManifest(this.manifestCode);
      this.close();
    } catch (error) {
      console.log(error);
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
    this.loading = false;
  }
  close() {
    this.closeSubject.next('true');
  }
}
