import { Component } from '@angular/core';
import {
  AccountReportLabels,
  IAccountReport,
} from '../account-report/account-report.label';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import AccountReportDM from 'src/app/store/dataModels/accountReportDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { AccountReportApiService } from 'src/app/api/accountReport-api.service';
import { NiraModalService } from 'nira-modal';
import { Util } from 'src/app/utils/util';
import { SummeryAccountReportComponent } from '../summery-account-report/summery-account-report.component';
import { BalanceAccountReportComponent } from '../balance-account-report/balance-account-report.component';
type TabSalesReport = 'balance' | 'detail' | 'summary';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss'],
})
export class ExpenseReportComponent {
  selectedComponent: TabSalesReport = 'detail';
  loading = false;
  labels =
    this.labelManagerService.getLabels<IAccountReport>(AccountReportLabels);
  accountReportForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  // key center1
  data: { center1: string; center2: string; center2Name: string } | undefined =
    undefined;
  tableData: BehaviorSubject<AccountReportDM[]> = new BehaviorSubject<
    AccountReportDM[]
  >([]);
  columnsSchema = [
    {
      key: 'accountTransactionID',
      type: COLUMNS_TYPES.TEXT,
      label: 'تراکنش',
    },
    {
      key: 'refCode',
      type: COLUMNS_TYPES.TEXT,
      label: 'رفرنس',
    },
    {
      key: 'description',
      type: COLUMNS_TYPES.TEXT,
      label: 'توضیحات',
    },
    {
      key: 'transactionDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: 'تاریخ',
    },
    {
      key: 'amount',
      type: COLUMNS_TYPES.NUMBER,
      label: 'مبلغ',
      canColorfulNumber: true,
    },
    {
      key: 'balance',
      type: COLUMNS_TYPES.NUMBER,
      label: 'مانده',
      canColorfulNumber: true,
    },
  ];

  constructor(
    private labelManagerService: LabelManagerService,
    private accountReportApi: AccountReportApiService,
    private niraModalService: NiraModalService
  ) {}

  async onSubmit() {
    if (this.selectedComponent === 'detail') {
      this.getDetail();
    } else if (this.selectedComponent === 'balance') {
      this.getBalance();
    } else if (this.selectedComponent === 'summary') {
      this.getSummary();
    }
  }

  async getDetail() {
    this.loading = true;
    try {
      const center1 = this.data?.center2 != '0' ? this.data?.center2 : null;
      const result = await this.accountReportApi.AccountReport(
        'DETAILED',
        Util.shamsiToMiladi(
          this.accountReportForm.controls['fromDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        Util.shamsiToMiladi(
          this.accountReportForm.controls['toDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        'EXPENSE',
        this.data?.center1 === '0' ? null : this.data?.center1,
        this.data?.center2.toString() === '0' ? null : this.data?.center2
      );
      this.tableData.next(result);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  async getSummary() {
    this.loading = true;

    const result = await this.accountReportApi.AccountReportSummary(
      'SUMMARY',
      Util.shamsiToMiladi(
        this.accountReportForm.controls['fromDateFormControl'].value,
        'YYYY-MM-DD'
      ),
      Util.shamsiToMiladi(
        this.accountReportForm.controls['toDateFormControl'].value,
        'YYYY-MM-DD'
      ),
      'EXPENSE',
      this.data?.center1 === '0' ? null : this.data?.center1,
      this.data?.center2.toString() === '0' ? null : this.data?.center2
    );

    this.niraModalService.open(SummeryAccountReportComponent, {
      data: {
        center1: this.data?.center1,
        center2: this.data?.center2,
        center2Name: this.data?.center2Name,
        fromDate: result.fromDate,
        toDate: result.toDate,
        summery: result.summery,
      },
    });
    this.loading = false;
  }

  async getBalance() {
    this.loading = true;
    const result = await this.accountReportApi.AccountReportBalance(
      'BALANCE',
      'EXPENSE',
      this.data?.center1 === '0' ? null : this.data?.center1,
      this.data?.center2.toString() === '0' ? null : this.data?.center2
    );

    this.niraModalService.open(BalanceAccountReportComponent, {
      data: {
        center1: this.data?.center1,
        center2: this.data?.center2,
        center2Name: this.data?.center2Name,
        reportDateTime: result.reportDateTime,
        balance: result.balance,
      },
    });
    this.loading = false;
  }
}
