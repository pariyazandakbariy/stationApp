import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ICargoDeliveryService {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  serviceNumber: string;
  clockMovement: string;
  arrivalTime: string;
  vehicleType: string;
  company: string;
  driverName: string;
  tableDestinationCity: string;
  tableHeaderVehicleTypeId: string;
  tableHeaderVehicleTypeNameFa: string;
  tableDestinationStation: string;
  destinationStation: string;
  tableWaitingTime: string;
  tableWeight: string;
  tableDimensions: string;
  tableAction: string;
  add: string;
  tableEdit: string;
  close: string;
  tableHeaderAction: string;
  buttonSubmit: string;
  destinationCity: string;
  buttonSearchService: string;
  driverFullName: string;
  messageError: string;
  departureDateTime: string;
}

export const Labels: Record<UserLanguage, ICargoDeliveryService> = {
  fa: {
    contentCardTitle: 'تحویل به سرویس',
    search: 'جستجو',
    addButtonName: 'جدید',
    serviceNumber: 'شماره سرویس',
    clockMovement: 'ساعت و حرکت',
    arrivalTime: 'ساعت  رسیدن',
    vehicleType: 'نوع وسیله نقلیه',
    tableHeaderVehicleTypeId: 'کد',
    destinationStation: 'ایستگاه مقصد',
    tableHeaderVehicleTypeNameFa: 'نام',
    company: 'شرکت',
    driverName: 'نام راننده',
    tableDestinationCity: 'مقصد',
    tableDestinationStation: 'ایستگاه مقصد',
    tableWaitingTime: 'مبلغ',
    tableWeight: 'وزن',
    tableDimensions: 'ابعاد',
    destinationCity: 'شهر مقصد',
    tableAction: 'چاپ',
    tableEdit: 'اعمال تغییرات  ',
    add: 'افزودن  ',
    close: 'بستن',
    tableHeaderAction: 'اکشن',
    buttonSubmit: 'تحویل به سرویس',
    buttonSearchService: 'جستجوی سرویس',
    driverFullName: 'نام راننده',
    messageError: 'سرویسی یافت نشد',
    departureDateTime: 'ساعت حرکت',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    serviceNumber: 'Service number',
    clockMovement: 'Clock and movement',
    arrivalTime: 'arrival time',
    vehicleType: 'Vehicle type',
    company: 'Company',
    driverName: 'Driver name',
    tableDestinationCity: 'Destination',
    tableDestinationStation: 'Destination station',
    tableHeaderVehicleTypeId: 'Id',
    tableHeaderVehicleTypeNameFa: 'Name',
    tableWaitingTime: 'Waiting time',
    destinationStation: 'Destination station',
    tableWeight: 'Weight',
    tableDimensions: 'Dimensions',
    tableAction: 'Show',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    tableHeaderAction: 'Action',
    buttonSubmit: 'Action',
    destinationCity: 'Destination city',
    buttonSearchService: 'Destination city',
    driverFullName: 'Destination city',
    messageError: 'Destination city',
    departureDateTime: 'Destination city',
  },
};
