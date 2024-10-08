import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISalesReportLabel {
  headerTitle: string;
  numberCargo: string;
  submit: string;
  billCode: string;
  originCity: string;
  destinationCity: string;
  originOffice: string;
  destinationOffice: string;
  itemNo: string;
  billDateTime: string;
  totalPrice: string;
  billStatus: string;
  operationCompleted: string;
  masterBill: string;
  voidBillBtn: string;
  printBtn: string;
  printLabelBtn: string;
}

export const Labels: Record<UserLanguage, ISalesReportLabel> = {
  fa: {
    headerTitle: 'بررسی بارنامه ',
    numberCargo: 'شماره بارنامه : ',
    submit: 'جستجو',
    billCode: 'شماره بار نامه : ',
    originCity: 'شهر مبدا : ',
    destinationCity: 'شهر مقصد : ',
    originOffice: 'ایستگاه مبدا : ',
    destinationOffice: 'ایستگاه مقصد : ',
    itemNo: 'شماره قطعه : ',
    billDateTime: 'تاریخ صدور : ',
    totalPrice: 'مبلغ کل : ',
    billStatus: 'وضعیت : ',
    operationCompleted: 'تکمیل عملیات : ',
    masterBill: 'بارنامه اصلی : ',
    voidBillBtn: 'ابطال بارنامه',
    printBtn: 'پرینت',
    printLabelBtn: 'چاپ لیبل',
  },
  en: {
    headerTitle: 'Request registration',
    numberCargo: 'How to get the destination',
    submit: 'submit',
    billCode: 'Bill Id',
    originCity: 'Origin city',
    destinationCity: 'Destination city',
    originOffice: 'Origin office',
    destinationOffice: 'Destination office',
    itemNo: 'Item no',
    billDateTime: 'Bill dateTime',
    totalPrice: 'Total price',
    billStatus: 'Bill status',
    operationCompleted: 'Operation completed',
    masterBill: 'Master bill',
    voidBillBtn: 'Void bill',
    printBtn: 'Print',
    printLabelBtn: 'Print label',
  },
};
