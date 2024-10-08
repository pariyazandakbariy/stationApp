import { Component } from '@angular/core';
import {
  AccountReportLabels,
  IAccountReport,
} from '../account-report/account-report.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountReportApiService } from 'src/app/api/accountReport-api.service';
import { Util } from 'src/app/utils/util';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { BehaviorSubject } from 'rxjs';
import AccountReportDM from 'src/app/store/dataModels/accountReportDM';

@Component({
  selector: 'app-detail-account-report',
  templateUrl: './detail-account-report.component.html',
  styleUrls: ['./detail-account-report.component.scss'],
})
export class DetailAccountReportComponent {
  labels =
    this.labelManagerService.getLabels<IAccountReport>(AccountReportLabels);
  searchText: string = '';
  loading = false;
  detailAccountReportForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
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
      type: COLUMNS_TYPES.TEXT,
      label: 'تاریخ',
    },
    {
      key: 'amount',
      type: COLUMNS_TYPES.NUMBER,
      label: 'مبلغ',
    },
    {
      key: 'balance',
      type: COLUMNS_TYPES.TEXT,
      label: 'مانده',
    },
  ];
  constructor(
    private labelManagerService: LabelManagerService,
    private accountReportApi: AccountReportApiService
  ) {}
  async onSubmit() {
    this.loading = true;
    const result = await this.accountReportApi.AccountReport(
      'DETAILED',
      Util.shamsiToMiladi(
        this.detailAccountReportForm.controls['fromDateFormControl'].value,
        'YYYY-MM-DD'
      ),
      Util.shamsiToMiladi(
        this.detailAccountReportForm.controls['toDateFormControl'].value,
        'YYYY-MM-DD'
      ),
      'PBL',
      this.data?.center1,
      this.data?.center2
    );
    this.tableData.next(result);
    this.loading = false;
  }

  ngOnInit() {}
}
