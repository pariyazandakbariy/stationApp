import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IModal, NiraModalConfig, NiraModalService } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { BillInformationApiService } from 'src/app/api/billInformation-api.service';
import { SalesReportApiService } from 'src/app/api/sales-report-api.service';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { TraditionalManifestCS } from 'src/app/store/componentStore/traditinalManifestCS';
import BillInformationDM from 'src/app/store/dataModels/billInformationDM';
import BillItemDM from 'src/app/store/dataModels/billItemDM';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import TraditionalManifestDM from 'src/app/store/dataModels/traditionalManifestDM';
import TraditionalManifestItemDM from 'src/app/store/dataModels/traditionalManifestItemDM';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Links } from 'src/app/utils/links';
import { ConfirmDialog, DetailViewers } from 'src/app/utils/types';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { ErrorType } from '../../invoice/invoice.component';
import { VoidBillModalComponent } from '../../sales-report/void-bill-modal/void-bill-modal.component';
import { TraditionalManifestItemFormComponent } from '../traditional-manifest-item-form/traditional-manifest-item-form.component';
import {
  ITraditionalManifest,
  Labels,
} from './traditional-manifest-modal.label';

@Component({
  selector: 'app-traditional-manifest-modal',
  templateUrl: './traditional-manifest-modal.component.html',
  styleUrls: ['./traditional-manifest-modal.component.scss'],
})
export class TraditionalManifestModalComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<ITraditionalManifest>(Labels);
  loading = false;
  loadingCreateManifest = false;
  error: ErrorType | undefined = undefined;
  traditionalManifest: TraditionalManifestDM | undefined = undefined;
  traditionalManifests: BehaviorSubject<TraditionalManifestItemDM[]> =
    new BehaviorSubject<TraditionalManifestItemDM[]>([]);
  confirmModal: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.createManifest,
    text: this.labels.confirmCreateManifestText,
    title: this.labels.confirmCreateManifestTitle,
    color: 'success',
  };
  get detailViewers() {
    return DetailViewers;
  }
  columnsSchema = [
    {
      key: 'billNumber',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderBillCode,
    },
    {
      key: 'billDate',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableHeaderDate,
    },
    {
      key: 'receiverFullName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderName,
    },
    {
      key: 'receiverMobilePhone',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderPhoneNumber,
    },
    {
      key: 'priceToCollectAmount',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableHeaderPrice,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableHeaderAction,
      data: [
        {
          key: 'edit',
          component: EditSquareIconComponent,
        },
      ],
    },
  ];
  constructor(
    private labelManagerService: LabelManagerService,
    private traditionalManifestCS: TraditionalManifestCS,
    private niraModalService: NiraModalService
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.config.data) {
      this.traditionalManifest = this.config.data;
      this.traditionalManifests.next(this.config.data.traditionalManifestItems);
    }
  }

  openFormModal() {
    const dialog = this.niraModalService.open(
      TraditionalManifestItemFormComponent,
      {
        data: {
          traditionalManifestCode:
            this.traditionalManifest?.traditionalManifestId,
          data: undefined,
        },
        outsideClose: false,
      }
    );
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getTraditionalManifestInformation(
          this.traditionalManifest?.traditionalManifestId!
        );
      }
    });
  }

  async getTraditionalManifestInformation(value: number) {
    try {
      this.traditionalManifest =
        await this.traditionalManifestCS.getTraditionalManifestById(value);
      this.traditionalManifests.next(
        this.traditionalManifest.traditionalManifestItems
      );
    } catch (error) {
      console.log(error);
    }
  }

  close(data: string) {
    this.closeSubject.next(data);
  }

  onCancellationClick() {
    this.loadingCreateManifest = true;
    try {
      this.traditionalManifestCS.VoidTraditionalManifest(
        this.traditionalManifest?.traditionalManifestId!
      );
      this.close('true');
    } catch (error) {
      console.log(error);
    }
    this.loadingCreateManifest = false;
  }

  async onCreateManifestClicked() {
    this.loadingCreateManifest = true;
    try {
      await this.traditionalManifestCS.processTraditionalManifest(
        this.traditionalManifest?.traditionalManifestId!
      );
      this.close('true');
    } catch (error) {
      console.log(error);
    }
    this.loadingCreateManifest = false;
  }

  onColumnClicked(data: { data: TraditionalManifestItemDM; key: string }) {
    const dialog = this.niraModalService.open(
      TraditionalManifestItemFormComponent,
      {
        data: {
          traditionalManifestCode:
            this.traditionalManifest?.traditionalManifestId,
          data: data,
        },
        outsideClose: false,
      }
    );
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getTraditionalManifestInformation(
          this.traditionalManifest?.traditionalManifestId!
        );
      }
    });
  }
}
