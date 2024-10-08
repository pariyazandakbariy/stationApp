import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IBillDetailViewer {
  headerTitle: string;
  tableHeaderId: string;
  tableHeaderCount: string;
  tableHeaderProductType: string;
  tableHeaderPacking: string;
  tableHeaderWeight: string;
  submit: string;
  billNumber: string;
  serviceName: string;
  originCity: string;
  destinationCity: string;
  originOffice: string;
  destinationOffice: string;
  durationMinutes: string;
  vehicleType: string;
  billDateTime: string;
  driverName: string;
  fullName: string;
  driverPhone: string;
  arrivalDateTime: string;
  departureDateTime: string;
  operationCompleted: string;
  carrier: string;
  voidBillBtn: string;
  printBtn: string;
  completeOperation: string;
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
  numberPieces: string;
  issueSolarDate: string;
  billStatus: string;
  pleaseWait: string;
  receiverFullName: string;
  receiverMobilePhone: string;
  senderFullName: string;
  senderMobilePhone: string;
  deliveryDateTime: string;
  daysInWareHouse: string;
  courierAmount: string;
  destinationChargeAmount: string;
  vat: string;
  wareHouseCostAmount: string;
  financialInformation: string;
  deliveryRecipientInformation: string;
}

export const Labels: Record<UserLanguage, IBillDetailViewer> = {
  fa: {
    headerTitle: 'اطلاعات بارنامه',
    tableHeaderId: 'ردیف',
    tableHeaderCount: 'تعداد',
    tableHeaderProductType: 'نوع کالا',
    tableHeaderPacking: 'بسته بندی',
    tableHeaderWeight: 'وزن / کیلوگرم',
    submit: 'جستجو',
    serviceName: 'کد سرویس',
    billNumber: 'شماره بارنامه : ',
    originCity: 'شهر مبدا : ',
    destinationCity: 'شهر مقصد : ',
    originOffice: 'ایستگاه مبدا : ',
    destinationOffice: 'ایستگاه مقصد : ',
    durationMinutes: 'مدت زمان رسیدن : ',
    vehicleType: 'وسیله نقلیه : ',
    billDateTime: 'تاریخ صدور : ',
    driverName: 'نام راننده : ',
    fullName: 'نام شخص : ',
    driverPhone: 'شماره راننده : ',
    arrivalDateTime: 'ساعت حرکت : ',
    departureDateTime: 'ساعت رسیدن : ',
    operationCompleted: 'تکمیل عملیات',
    completeOperation: 'تحویل بار',
    carrier: 'شرکت',
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
    cargoFare: 'کرایه بار : ',
    tax: 'مالیات : ',
    totalCharges: 'عوارض و شارژ : ',
    prePayment: 'پیش پرداخت : ',
    totalPrice: 'جمع کل : ',
    leftPayment: 'مبلغ باقیمانده : ',
    numberPieces: 'تعداد قطعات : ',
    issueSolarDate: 'تاریخ صدور : ',
    billStatus: 'وضعیت : ',
    pleaseWait: 'لطفا صبر کنید...',
    receiverFullName: 'نام دریافت کننده : ',
    receiverMobilePhone: ' موبایل دریافت کننده : ',
    senderFullName: 'نام ارسال کننده : ',
    senderMobilePhone: ' موبایل ارسال کننده : ',
    deliveryDateTime: 'زمان تحویل : ',
    daysInWareHouse: 'تعداد روزهای در انبار : ',
    courierAmount: 'مبلغ پیک : ',
    destinationChargeAmount: 'مبلغ شارژ مقصد : ',
    vat: 'مالیات بر ارزش افزوده : ',
    wareHouseCostAmount: 'مقدار هزینه انبار : ',
    financialInformation: 'اطلاعات مالی  ',
    deliveryRecipientInformation: 'اطلاعات تحویل گیرنده ',
  },
  en: {
    headerTitle: 'Service information',
    tableHeaderId: 'Id',
    tableHeaderCount: 'Count',
    tableHeaderProductType: 'ProductType',
    tableHeaderPacking: 'Packing',
    tableHeaderWeight: 'kg / Weight',
    billNumber: 'Bill No',
    submit: 'submit',
    serviceName: 'Service Id',
    originCity: 'Origin city',
    destinationCity: 'Destination city',
    originOffice: 'Origin office',
    destinationOffice: 'Destination office',
    completeOperation: 'completeOperation',
    durationMinutes: 'Duration Minutes',
    vehicleType: 'Vehicle Type',
    billDateTime: 'Bill dateTime',
    driverName: 'Driver Name',
    fullName: 'fullName',
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
    numberPieces: 'Number of pieces',
    issueSolarDate: 'Issue solar date',
    billStatus: 'Status',
    pleaseWait: 'please wait',
    receiverFullName: 'Receiver fullName',
    receiverMobilePhone: 'Receiver mobilePhone',
    senderFullName: 'Sender fullName',
    senderMobilePhone: 'Sender mobilePhone',
    deliveryDateTime: 'Delivery DateTime',
    daysInWareHouse: 'daysInWareHouse',
    courierAmount: 'Courier amount',
    destinationChargeAmount: 'destinationChargeAmount',
    vat: 'VAT',
    wareHouseCostAmount: 'WareHouse cost amount',
    financialInformation: 'Financial information',
    deliveryRecipientInformation: 'Financial information',
  },
};
