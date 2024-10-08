import { Component } from '@angular/core';
import { SalesReportApiService } from 'src/app/api/sales-report-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import SalesReportDM from 'src/app/store/dataModels/SalesReportDM';
import { ISalesReportLabel, Labels } from './sales-report-by-bill-code.label';
import { NiraModalService } from 'nira-modal';
import { VoidBillModalComponent } from '../void-bill-modal/void-bill-modal.component';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { Router } from '@angular/router';
import { Links } from 'src/app/utils/links';
import { DetailViewers } from 'src/app/utils/types';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';

@Component({
  selector: 'app-sales-report-by-bill-code',
  templateUrl: './sales-report-by-bill-code.component.html',
  styleUrls: ['./sales-report-by-bill-code.component.scss'],
})
export class SalesReportByBillCodeComponent {
  labels = this.labelManagerService.getLabels<ISalesReportLabel>(Labels);
  loading = false;
  salesReport: SalesReportDM = {} as SalesReportDM;
  code = '';
  get detailViewers() {
    return DetailViewers;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService
  ) {}

  async onSubmit() {
    this.niraModalService.open(BillDetailViewerComponent, {
      data: this.code,
    });
  }
}
