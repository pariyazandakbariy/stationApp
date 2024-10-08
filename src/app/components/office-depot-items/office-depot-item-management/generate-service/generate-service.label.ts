import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IMessageDialogLabel {
  dialogTitle: string;
  buttonLabelCancel: string;
  buttonSubmit: string;
  destinationStation: string;
  originStation: string;
  vehicleType: string;
  departureTime: string;
  receiveTime: string;
  travelTime: string;
  fromDate: string;
  toDate: string;
  driverName: string;
  selectDriver: string;
  driverPhone: string;
  company: string;
  serviceNumber: string;
  addButtonName: string;
  tableHeaderId: string;
  tableHeaderOffice: string;
  tableHeaderStopTime: string;
  tableHeaderAction: string;
  originCity: string;
  destinationCity: string;
  dayOfWeek: string;
  wayStations: string;
  editService: string;
}

export const MessageLabels: Record<UserLanguage, IMessageDialogLabel> = {
  fa: {
    dialogTitle: 'ایجاد سرویس جدید',
    editService: 'ویرایش سرویس ',
    buttonLabelCancel: 'انصراف',
    buttonSubmit: 'ایجاد سرویس',
    destinationStation: 'ایستگاه مقصد',
    originStation: 'ایستگاه مبدا',
    vehicleType: 'نوع وسیله',
    departureTime: 'ساعت حرکت',
    receiveTime: 'ساعت رسیدن',
    travelTime: 'مدت زمان سفر',
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    driverName: 'نام راننده',
    selectDriver: 'انتخاب راننده',
    driverPhone: 'تلفن همراه راننده',
    company: 'شرکت',
    serviceNumber: 'شماره سرویس',
    addButtonName: 'جدید',
    tableHeaderId: 'ردیف',
    tableHeaderOffice: 'نام ایستگاه',
    tableHeaderStopTime: 'ساعت رسیدن',
    tableHeaderAction: 'حذف',
    originCity: 'شهر مبدا',
    destinationCity: 'شهر مقصد',
    dayOfWeek: 'روزهای هفته',
    wayStations: 'ایستگاه های بین راه',
  },

  en: {
    dialogTitle: 'Logout?',
    buttonLabelCancel: 'Cancel',
    buttonSubmit: 'Submit',
    destinationStation: 'Destination station',
    originStation: 'Origin station',
    vehicleType: 'VehicleType',
    departureTime: 'Departure time',
    receiveTime: 'receive Time',
    travelTime: 'travel Time',
    fromDate: 'from Date',
    toDate: 'to Date',
    driverName: 'driver Name',
    selectDriver: 'Select driver',
    driverPhone: 'driver Phone',
    company: 'company',
    serviceNumber: 'company',
    addButtonName: 'company',
    tableHeaderId: 'Id',
    tableHeaderOffice: 'Id',
    tableHeaderStopTime: 'Id',
    tableHeaderAction: 'Id',
    originCity: 'Origin City',
    destinationCity: 'Destination City',
    dayOfWeek: 'Day Of Week',
    wayStations: 'Way Stations',
    editService: 'edit Service',
  },
};
