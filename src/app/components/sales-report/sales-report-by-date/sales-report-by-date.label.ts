import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISalesReportByDate {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableBillCode: string;
  tableMasterBill: string;
  tableOperationCompleted: string;
  tableOriginCity: string;
  tableDestinationCity: string;
  tableOriginOffice: string;
  tableDestinationOffice: string;
  tableItemNo: string;
  tableBillDateTime: string;
  tableTotalPrice: string;
  tableBillStatus: string;
  tableHeaderAction: string;
  add: string;
  tableEdit: string;
  close: string;
  fromDate: string;
  toDate: string;
  label: string;
  print: string;
  void: string;
}

export const Labels: Record<UserLanguage, ISalesReportByDate> = {
  fa: {
    contentCardTitle: 'لیست بارنامه های صادر شده',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableBillCode: 'شماره بارنامه',
    tableMasterBill: 'MasterBill',
    tableOperationCompleted: 'عملیات تکمیل شده',
    tableOriginCity: 'مبدا',
    tableOriginOffice: 'ایستگاه مبدا',
    tableDestinationCity: 'مقصد',
    tableDestinationOffice: 'ایستگاه مقصد',
    tableItemNo: 'تعداد قطعات',
    tableBillDateTime: 'تاریخ صدور',
    tableTotalPrice: 'مبلغ',
    tableBillStatus: 'وضعیت',
    tableHeaderAction: 'مشاهده',
    tableEdit: 'اعمال تغییرات ',
    add: 'افزودن  ',
    close: 'بستن',
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    label: 'لیبل',
    print: 'پرینت',
    void: 'ابطال',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    tableBillCode: 'Bill ID',
    tableMasterBill: 'Master Bill',
    tableOperationCompleted: 'Operation Completed',
    tableOriginCity: 'Origin',
    tableDestinationCity: 'Destination',
    tableOriginOffice: 'Origin Office',
    tableDestinationOffice: 'Destination Office',
    tableItemNo: 'Item No',
    tableBillDateTime: 'Bill Date Time',
    tableTotalPrice: 'Total Price',
    tableBillStatus: 'BillStatus',
    tableHeaderAction: 'Show',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    fromDate: 'From date',
    toDate: 'To date',
    label: 'label',
    print: 'print',
    void: 'void',
  },
};
