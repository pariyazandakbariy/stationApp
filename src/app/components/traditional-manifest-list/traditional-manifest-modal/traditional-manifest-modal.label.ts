import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ITraditionalManifest {
  headerTitle: string;
  contentCardTitle: string;
  tableHeaderBillCode: string;
  tableHeaderDate: string;
  tableHeaderName: string;
  tableHeaderPhoneNumber: string;
  tableHeaderPrice: string;
  tableHeaderService: string;
  tableHeaderManifestNumber: string;
  tableHeaderDescription: string;
  tableHeaderAction: string;
  createManifest: string;
  close: string;
  add: string;
  origin: string;
  number: string;
  service: string;
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
  edit: string;
  delete: string;
  confirmCreateManifestText: string;
  confirmCreateManifestTitle: string;
  fareAmount: string;
  costs: string;
  cargoFare: string;
  tax: string;
  totalCharges: string;
  prePayment: string;
  totalPrice: string;
  leftPayment: string;
  cancellation: string;
}

export const Labels: Record<UserLanguage, ITraditionalManifest> = {
  fa: {
    headerTitle: 'مدیریت بارنامه سنتی',
    contentCardTitle: 'آیتم های بارنامه سنتی',
    tableHeaderBillCode: 'شماره بار نامه',
    tableHeaderDate: 'تاریخ',
    tableHeaderName: 'نام دریافت کننده',
    tableHeaderPhoneNumber: 'همراه دریافت کننده',
    tableHeaderPrice: 'مبلغ دریافتی',
    tableHeaderService: 'سرویس',
    tableHeaderManifestNumber: 'شماره مانیفست',
    tableHeaderDescription: 'توضیحات',
    tableHeaderAction: 'عملیات',
    createManifest: 'ایجاد مانیفست بلوبار',
    close: 'بستن',
    add: 'جدید',
    origin: ' مبدا',
    number: 'شماره',
    service: 'سرویس',
    destinationOffice: 'ایستگاه مقصد',
    durationMinutes: 'مدت زمان رسیدن',
    vehicleType: 'وسیله نقلیه',
    billDateTime: 'تاریخ صدور',
    driverName: 'نام راننده',
    driverPhone: 'شماره راننده',
    arrivalDateTime: 'ساعت حرکت',
    departureDateTime: 'ساعت رسیدن',
    operationCompleted: 'تکمیل عملیات',
    carrier: 'شرکت',
    voidBillBtn: 'ابطال بارنامه',
    printBtn: 'پرینت',
    printLabelBtn: 'چاپ لیبل',
    edit: 'اعمال تغییرات',
    delete: 'حذف',
    confirmCreateManifestText:
      'پس از ایجاد مانیفست بلوبار امکان ویرایش مانیفست وجود ندارد. از ایجاد آن اطمینان دارید؟',
    confirmCreateManifestTitle: 'ایجاد مانیفست بلوبار',
    fareAmount: 'مبلغ کرایه',
    costs: 'هزینه ها',
    cargoFare: 'کرایه بار',
    tax: 'مالیات',
    totalCharges: 'عوارض و شارژ',
    prePayment: 'پیش پرداخت',
    totalPrice: 'جمع کل',
    leftPayment: 'مبلغ باقیمانده',
    cancellation: 'ابطال',
  },
  en: {
    headerTitle: 'Service information',
    contentCardTitle: 'Service information',
    tableHeaderBillCode: 'Bill code',
    tableHeaderDate: 'Date',
    tableHeaderName: 'Name',
    tableHeaderPhoneNumber: 'PhoneNumber',
    tableHeaderPrice: 'Price',
    tableHeaderService: 'Service',
    tableHeaderManifestNumber: 'Manifest number',
    tableHeaderDescription: 'Description',
    tableHeaderAction: 'Action',
    createManifest: 'Create manifest',
    origin: 'Origin ',
    number: 'number',
    service: 'service',
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
    confirmCreateManifestText: 'confirmDeleteText',
    confirmCreateManifestTitle: 'confirmDeleteTitle',
    fareAmount: 'Fare amount',
    costs: 'Costs',
    cargoFare: 'Cargo fare',
    tax: 'Tax',
    totalCharges: 'Total charges',
    prePayment: 'Pre payment',
    totalPrice: 'Total price',
    leftPayment: 'Left payment',
    cancellation: 'Cancellation',
  },
};
