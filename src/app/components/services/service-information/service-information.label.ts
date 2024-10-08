import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServicesServiceNoLabel {
  headerTitle: string;
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
}

export const Labels: Record<UserLanguage, IServicesServiceNoLabel> = {
  fa: {
    headerTitle: 'اطلاعات سرویس',
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
    operationCompleted: 'تکمیل عملیات ',
    carrier: 'شرکت : ',
    voidBillBtn: 'ابطال بارنامه',
    printBtn: 'پرینت',
    printLabelBtn: 'چاپ لیبل',
  },
  en: {
    headerTitle: 'Service information',
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
  },
};
