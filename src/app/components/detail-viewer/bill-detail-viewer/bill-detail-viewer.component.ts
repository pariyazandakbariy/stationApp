import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IModal, NiraModalConfig, NiraModalService } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { BillInformationApiService } from 'src/app/api/billInformation-api.service';
import { SalesReportApiService } from 'src/app/api/sales-report-api.service';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import BillInformationDM from 'src/app/store/dataModels/billInformationDM';
import BillItemDM from 'src/app/store/dataModels/billItemDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Links } from 'src/app/utils/links';
import { ConfirmDialog } from 'src/app/utils/types';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { ErrorType } from '../../invoice/invoice.component';
import { VoidBillModalComponent } from '../../sales-report/void-bill-modal/void-bill-modal.component';
import { IBillDetailViewer, Labels } from './bill-detail-viewer.label';
import { OfficeDepotItemsDeliveryFormDialogComponent } from '../../office-depot-items/office-depot-items-delivery-form-dialog/office-depot-items-delivery-form-dialog.component';

@Component({
  selector: 'bill-detail-viewer',
  templateUrl: './bill-detail-viewer.component.html',
  styleUrls: ['./bill-detail-viewer.component.scss'],
})
export class BillDetailViewerComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<IBillDetailViewer>(Labels);
  loading = false;
  error: ErrorType | undefined = undefined;
  issueBill: BillInformationDM | undefined;
  billItems: BehaviorSubject<BillItemDM[]> = new BehaviorSubject<BillItemDM[]>(
    []
  );
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  columnsSchema = [
    {
      key: 'billItemID',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderId,
    },
    {
      key: 'itemNo',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderCount,
    },
    {
      key: 'exceptionType',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderProductType,
      data: {
        key: 'exceptionTypeName_FA',
      },
    },
    {
      key: 'packageType',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderPacking,
      data: {
        key: 'packageTypeName_FA',
      },
    },
    {
      key: 'weight',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderWeight,
    },
  ];
  constructor(
    private labelManagerService: LabelManagerService,
    private serviceInformationApi: ServiceInformationApiService,
    private billInformationApiService: BillInformationApiService,
    private niraModalService: NiraModalService,
    private salesReportApi: SalesReportApiService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.getBillInformationApiService(this.config.data);
    this.loading = false;
  }

  async getBillInformationApiService(billCode: string) {
    this.loading = true;
    try {
      this.issueBill = await this.billInformationApiService.BillInformation(
        billCode
      );
      this.billItems.next(this.issueBill?.billItems);
    } catch (error: any) {
      this.error = error.error;
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
  onVoidBillBtnClicked() {
    const modal = this.niraModalService.open(VoidBillModalComponent, {
      data: this.issueBill?.bill?.billCode,
    });
    modal.afterClosed.subscribe(async (data) => {
      if (data) {
        const dataUpdate = await this.salesReportApi.SalesReportByBillCode(
          this.issueBill?.bill?.billCode!
        );
      }
    });
  }

  onLabelBillBtnClicked() {
    this.niraModalService.open(PrintLabelDialogComponent, {
      data: {
        isBill: true,
        billCode: this.issueBill?.bill?.billCode,
      },
    });
  }

  async onCompleteOperationClicked() {
    const dialog = this.niraModalService.open(
      OfficeDepotItemsDeliveryFormDialogComponent,
      {
        data: {
          bill: this.issueBill,
        },
      }
    );
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.close('false');
      }
    });
  }

  onPrintBillBtnClicked() {
    this.router.navigate([
      Links.invoice.route + '/' + this.issueBill?.bill?.billCode,
    ]);
    this.close('false');
  }
}
