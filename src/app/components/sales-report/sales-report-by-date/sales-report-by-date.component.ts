import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { SaleReportByDateCS } from 'src/app/store/componentStore/saleReportByDateCS';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { ISalesReportByDate, Labels } from './sales-report-by-date.label';
import SaleReportByDateDM from 'src/app/store/dataModels/saleReportByDateDM';
import { Util } from 'src/app/utils/util';
import { LabelIconComponent } from 'src/app/svg-icons/label-icon/label-icon.component';
import { PrintLabelDialogComponent } from '../../dialogs/print-label-dialog/print-label-dialog.component';
import { PrintIconComponent } from 'src/app/svg-icons/print-icon/print-icon.component';
import { Router } from '@angular/router';
import { Links } from 'src/app/utils/links';
import { VoidIconComponent } from 'src/app/svg-icons/void-icon/void-icon.component';
import { NiraModalService } from 'nira-modal';
import { VoidBillModalComponent } from '../void-bill-modal/void-bill-modal.component';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';

@Component({
  selector: 'app-sales-report-by-date',
  templateUrl: './sales-report-by-date.component.html',
  styleUrls: ['./sales-report-by-date.component.scss'],
})
export class SalesReportByDateComponent {
  labels = this.labelManagerService.getLabels<ISalesReportByDate>(Labels);
  searchText: string = '';
  loading = false;
  saleReportByDateForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  tableData: BehaviorSubject<SaleReportByDateDM[]> = new BehaviorSubject<
    SaleReportByDateDM[]
  >([]);
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
      key: 'billDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableBillDateTime,
    },
    {
      key: 'billStatus',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableBillStatus,
      data: {
        key: 'statusName',
      },
    },
    {
      key: 'destinationCity',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableDestinationCity,
      data: {
        key: 'cityNameFa',
      },
    },
    {
      key: 'destinationOffice',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableDestinationOffice,
      data: {
        key: 'officeName',
      },
    },
    {
      key: 'itemNo',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableItemNo,
    },
    {
      key: 'originCity',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableOriginCity,
      data: {
        key: 'cityNameFa',
      },
    },
    {
      key: 'originOffice',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableOriginOffice,
      data: {
        key: 'officeName',
      },
    },
    {
      key: 'totalPrice',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableTotalPrice,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableHeaderAction,
      data: [
        {
          key: 'label',
          title: this.labels.label,
          component: LabelIconComponent,
        },
        {
          key: 'print',
          title: this.labels.print,
          component: PrintIconComponent,
        },
        {
          key: 'void',
          title: this.labels.void,
          component: VoidIconComponent,
          filter: (saleReportByDate: SaleReportByDateDM) => {
            return saleReportByDate.billStatus?.status !== 'V';
          },
        },
      ],
    },
  ];

  get saleReportByDateList() {
    return this.saleReportByDateCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.saleReportByDateList.getValue();
    this.tableData.next(
      data.filter((saleReportByDate) => {
        return (
          saleReportByDate.billCode
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.billDateTime
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.billStatus?.statusName
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.destinationCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.destinationOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.itemNo
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.originCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.originOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          saleReportByDate.totalPrice
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }

  async getList() {
    this.loading = true;
    try {
      await this.saleReportByDateCS.doLoad(true, {
        fromDate: Util.shamsiToMiladi(
          this.saleReportByDateForm.controls['fromDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        toDate: Util.shamsiToMiladi(
          this.saleReportByDateForm.controls['toDateFormControl'].value,
          'YYYY-MM-DD'
        ),
      });
    } catch (error) {
      console.log(error);
      if (error === '204') {
        this.saleReportByDateCS.deleteAllItems();
      }
    }
    this.loading = false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private saleReportByDateCS: SaleReportByDateCS,
    private router: Router,
    private niraModalService: NiraModalService
  ) {}

  async ngAfterViewInit(): Promise<void> {
    this.saleReportByDateList.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }

  onSubmit() {
    this.getList();
  }

  onColumnClicked(data: { data: SaleReportByDateDM; key: string }) {
    if (data.key === 'label') {
      this.niraModalService.open(PrintLabelDialogComponent, {
        data: {
          isBill: true,
          billCode: data.data.billCode,
        },
      });
    } else if (data.key === 'print') {
      this.router.navigate([Links.invoice.route + '/' + data.data.billCode]);
    } else if (data.key === 'void') {
      const modal = this.niraModalService.open(VoidBillModalComponent, {
        data: data.data.billCode,
      });
      modal.afterClosed.subscribe((data) => {
        if (data) {
          this.saleReportByDateList.next([]);
          this.getList();
        }
      });
    }
  }
}
