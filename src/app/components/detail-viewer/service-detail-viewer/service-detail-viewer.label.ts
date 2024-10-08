import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServiceDetailViewer {
  headerTitle: string;
  tableHeaderId: string;
  tableHeaderCount: string;
  tableHeaderProductType: string;
  tableHeaderPacking: string;
  tableHeaderWeight: string;
  submit: string;
  billCode: string;
  serviceName: string;
  serviceNumber: string;
  originCity: string;
  destinationCity: string;
  originOffice: string;
  destinationOffice: string;
  durationMinutes: string;
  vehicleType: string;
  billDateTime: string;
  driverName: string;
  driverPhone: string;
  arrivalDateTime: string;
  departureDateTime: string;
  operationCompleted: string;
  carrier: string;
  voidBillBtn: string;
  printBtn: string;
  printLabelBtn: string;
  add: string;
  edit: string;
  close: string;
  delete: string;
  confirmDeleteText: string;
  confirmDeleteTitle: string;
  fareAmount: string;
  costs: string;
  cargoFare: string;
  tax: string;
  totalCharges: string;
  prePayment: string;
  totalPrice: string;
  leftPayment: string;
  update: string;
  pleaseWait: string;
}

export const Labels: Record<UserLanguage, IServiceDetailViewer> = {
  fa: {
    headerTitle: 'اطلاعات سرویس',
    tableHeaderId: 'ردیف',
    tableHeaderCount: 'تعداد',
    tableHeaderProductType: 'نوع کالا',
    tableHeaderPacking: 'بسته بندی',
    tableHeaderWeight: 'وزن / کیلوگرم',
    submit: 'جستجو',
    serviceName: 'کد سرویس : ',
    serviceNumber: 'شماره سرویس : ',
    billCode: 'شماره بارنامه',
    originCity: 'شهر مبدا : ',
    destinationCity: 'شهر مقصد : ',
    originOffice: 'ایستگاه مبدا : ',
    destinationOffice: 'ایستگاه مقصد : ',
    durationMinutes: 'مدت زمان رسیدن : ',
    vehicleType: 'وسیله نقلیه : ',
    billDateTime: 'تاریخ صدور : ',
    driverName: 'نام راننده : ',
    driverPhone: 'شماره راننده : ',
    arrivalDateTime: 'ساعت حرکت : ',
    departureDateTime: 'ساعت رسیدن : ',
    operationCompleted: 'تکمیل عملیات',
    carrier: 'شرکت : ',
    voidBillBtn: 'ابطال بارنامه',
    printBtn: 'پرینت',
    printLabelBtn: 'چاپ لیبل',
    add: 'افزودن',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    delete: 'حذف',
    confirmDeleteText: 'از حذف راننده اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف راننده',
    fareAmount: 'مبلغ کرایه',
    costs: 'هزینه ها',
    cargoFare: 'کرایه بار',
    tax: 'مالیات',
    totalCharges: 'عوارض و شارژ',
    prePayment: 'پیش پرداخت',
    totalPrice: 'جمع کل',
    leftPayment: 'مبلغ باقیمانده',
    update: 'ویرایش سرویس',
    pleaseWait: 'لطفا صبر کنید...',
  },
  en: {
    headerTitle: 'Service information',
    tableHeaderId: 'Id',
    tableHeaderCount: 'Count',
    tableHeaderProductType: 'ProductType',
    tableHeaderPacking: 'Packing',
    tableHeaderWeight: 'kg / Weight',
    submit: 'submit',
    billCode: 'Bill Id',
    serviceName: 'Service Id',
    serviceNumber: 'Service No',
    originCity: 'Origin city',
    destinationCity: 'Destination city',
    originOffice: 'Origin office',
    destinationOffice: 'Destination office',
    durationMinutes: 'Duration Minutes',
    vehicleType: 'Vehicle Type',
    billDateTime: 'Bill dateTime',
    driverName: 'Driver Name',
    driverPhone: 'Driver Phone',
    arrivalDateTime: 'Arrival DateTime',
    departureDateTime: 'Departure DateTime',
    operationCompleted: 'Operation completed',
    carrier: 'carrier',
    voidBillBtn: 'Void bill',
    printBtn: 'Print',
    printLabelBtn: 'Print label',
    add: 'add',
    edit: 'edit',
    close: 'close',
    delete: 'delete',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
    fareAmount: 'Fare amount',
    costs: 'Costs',
    cargoFare: 'Cargo fare',
    tax: 'Tax',
    totalCharges: 'Total charges',
    prePayment: 'Pre payment',
    totalPrice: 'Total price',
    leftPayment: 'Left payment',
    update: 'Update',
    pleaseWait: 'please wait',
  },
};
