import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServicesByDate {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableServiceId: string;
  tableServiceNo: string;
  tableDepartureDateTime: string;
  tableArrivalDateTime: string;
  tableVehicleType: string;
  tableCarrier: string;
  tableDurationMinutes: string;
  tableOriginCity: string;
  tableDestinationCity: string;
  tableOriginOffice: string;
  tableDestinationOffice: string;
  tableDriverFullName: string;
  tableDriverMobilePhone: string;
  tableHeaderAction: string;
  add: string;
  tableEdit: string;
  close: string;
  fromDate: string;
  toDate: string;
  tableAction: string;
  edit: string;
}

export const Labels: Record<UserLanguage, IServicesByDate> = {
  fa: {
    contentCardTitle: 'لیست سرویس ها',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableServiceId: 'کد سرویس',
    tableServiceNo: 'شماره سرویس',
    tableDepartureDateTime: 'تاریخ حرکت',
    tableArrivalDateTime: 'تاریخ رسیدن',
    tableVehicleType: 'وسیله نقلیه',
    tableCarrier: 'حمل و نقل',
    tableDurationMinutes: 'زمان (دقیقه)',
    tableOriginCity: 'مبدا',
    tableOriginOffice: 'ایستگاه مبدا',
    tableDestinationCity: 'مقصد',
    tableDestinationOffice: 'ایستگاه مقصد',
    tableDriverFullName: 'نام راننده',
    tableDriverMobilePhone: 'شماره همراه راننده',
    tableHeaderAction: 'مشاهده',
    tableEdit: 'اعمال تغییرات',
    add: 'افزودن  ',
    close: 'بستن',
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    tableAction: 'عملیات',
    edit: 'ویرایش',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    tableServiceId: 'Service ID',
    tableServiceNo: 'ServiceNo',
    tableDepartureDateTime: 'DepartureDateTime',
    tableArrivalDateTime: 'ArrivalDateTime',
    tableVehicleType: 'VehicleType',
    tableCarrier: 'Carrier',
    tableDurationMinutes: 'DurationMinutes',
    tableOriginCity: 'Origin',
    tableDestinationCity: 'Destination',
    tableOriginOffice: 'Origin Office',
    tableDestinationOffice: 'Destination Office',
    tableDriverFullName: 'DriverFullName',
    tableDriverMobilePhone: 'DriverMobilePhone',
    tableHeaderAction: 'Show',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    fromDate: 'From date',
    toDate: 'To date',
    tableAction: 'Action',
    edit: 'edit',
  },
};
