import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IManifestDetailViewerLabel {
  headerTitle: string;
  numberManifest: string;
  submit: string;
  manifestId: string;
  originCity: string;
  destinationCity: string;
  originOffice: string;
  destinationOffice: string;
  serviceCode: string;
  manifestDateTime: string;
  issuerUserCode: string;
  tableBillCode: string;
  tableServiceFreightShare: string;
  tableFreightCollectAmount: string;
  tablePayToServiceAmount: string;
  tableReceiveFromServiceAmount: string;
  tableManifestItemsCount: string;
  tableTotalItemsCount: string;
  voidBillBtn: string;
  printBtn: string;
  printLabelBtn: string;
  tableSum: string;
  print_downloadBtn: string;
  headerTitlePrint: string;
  featureManifest: string;
  descriptionCompany: string;
  salesOffice: string;
  airportCargoSalesOffice: string;
  issuerOffice: string;
  issuerUser: string;
  printerOffice: string;
  total: string;
  pleaseWait: string;
  errorReceiveInformation: string;
}

export const Labels: Record<UserLanguage, IManifestDetailViewerLabel> = {
  fa: {
    headerTitle: 'اطلاعات مانیفست ',
    numberManifest: 'شماره مانیفست : ',
    submit: 'جستجو',
    manifestId: 'شماره مانیفست',
    originCity: 'شهر مبدا',
    destinationCity: 'شهر مقصد',
    originOffice: 'ایستگاه مبدا',
    destinationOffice: 'ایستگاه مقصد',
    serviceCode: 'کد سرویس',
    manifestDateTime: 'تاریخ صدور ',
    issuerUserCode: 'کاربر صادرکننده',
    tableBillCode: 'شماره بارنامه',
    tableServiceFreightShare: 'کرایه حمل',
    tableFreightCollectAmount: 'پس کرایه',
    tablePayToServiceAmount: 'قابل پرداخت به راننده',
    tableReceiveFromServiceAmount: 'قابل دریافت از راننده',
    tableManifestItemsCount: 'تعداد مانیفست',
    tableTotalItemsCount: 'تعداد کل آیتم',
    tableSum: 'مجموع',
    voidBillBtn: 'ابطال بارنامه',
    printBtn: 'پرینت',
    printLabelBtn: 'چاپ لیبل',
    print_downloadBtn: 'پرینت / دانلود',
    headerTitlePrint: 'مانیفست بار',
    featureManifest: 'مشخصات مانیفست',
    descriptionCompany: 'متن توضیحات در مورد شرکت یا پشتیبانی ....',
    salesOffice: 'دفتر فروش ',
    airportCargoSalesOffice: 'دفتر فروش بار فرودگاه ',
    issuerOffice: 'دفتر صادر کننده',
    issuerUser: 'کاربر صادر کننده',
    printerOffice: 'کاربر پرینت کننده',
    total: 'مجموع',
    pleaseWait: 'لطفا صبر کنید...',
    errorReceiveInformation: 'خطا در دریافت اطلاعات',
  },
  en: {
    headerTitle: 'Request registration',
    numberManifest: 'How to get the destination',
    submit: 'submit',
    manifestId: 'Bill Id',
    originCity: 'Origin city',
    destinationCity: 'Destination city',
    originOffice: 'Origin office',
    destinationOffice: 'Destination office',
    serviceCode: 'Service Code',
    manifestDateTime: 'manifestDateTime',
    issuerUserCode: 'Issuer User Code',
    tableBillCode: 'Bill Code',
    tableServiceFreightShare: 'Service Freight Share',
    tableFreightCollectAmount: 'Freight Collect Amount',
    tablePayToServiceAmount: 'Pay To Service Amount',
    tableReceiveFromServiceAmount: 'Receive From Service Amount',
    tableManifestItemsCount: 'Manifest Items Count',
    tableTotalItemsCount: 'Total Items Count',
    voidBillBtn: 'Void bill',
    printBtn: 'Print',
    printLabelBtn: 'Print label',
    tableSum: 'Sum',
    print_downloadBtn: 'print / download',
    headerTitlePrint: 'Manifest',
    featureManifest: 'Feature Manifest',
    descriptionCompany: 'Description about the company',
    salesOffice: 'Sales Office',
    airportCargoSalesOffice: 'Airport cargo sales office',
    issuerOffice: 'Issuer Office',
    issuerUser: 'Issuer User',
    printerOffice: 'Printer Office',
    total: 'sum',
    pleaseWait: 'Please Wait',
    errorReceiveInformation: 'Error in receiving information',
  },
};
