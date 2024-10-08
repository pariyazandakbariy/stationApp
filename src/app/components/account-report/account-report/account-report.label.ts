import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IAccountReport {
  fromDate: string;
  toDate: string;
  search: string;
  summery: string;
  balance: string;
  groupedBalance: string;
  detail: string;
  debtReport: string;
  demandReport: string;
  assetReport: string;
  incomeReport: string;
  expenseReport: string;
}

export const AccountReportLabels: Record<UserLanguage, IAccountReport> = {
  fa: {
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    search: 'جستجو',
    summery: 'سرجمع',
    balance: 'مانده',
    groupedBalance: 'مانده گروهی',
    detail: 'ریز',
    debtReport: 'گزارش بدهی',
    demandReport: 'گزارش مطالبات',
    incomeReport: 'گزارش درآمد',
    expenseReport: 'گزارش هزینه',
    assetReport: 'گزارش دارایی',
  },
  en: {
    fromDate: 'From Date',
    toDate: 'To Date',
    search: 'search',
    summery: 'Summery ',
    balance: 'Balance ',
    groupedBalance: 'groupedBalance ',
    detail: 'Detail',
    debtReport: 'debtReport',
    demandReport: 'demandReport',
    assetReport: 'assetReport',
    incomeReport: 'incomeReport',
    expenseReport: 'expenseReport',
  },
};
