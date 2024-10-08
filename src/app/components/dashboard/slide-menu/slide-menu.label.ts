import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISlideMenuLabel {
  dashboard: string;
  basicInformation: string;
  cities: string;
  stations: string;
  offices: string;
  drivers: string;
  routes: string;
  vehicleTypes: string;
  home: string;
  exportWaybill: string;
  historyWaybill: string;
  cargoInsideStore: string;
  printers: string;
  serviceItems: string;
  debtReport: string;
  report: string;
  demandReport: string;
  accountReport: string;
  incomeReport: string;
  expenseReport: string;
  assetReport: string;

  services: string;
  manifest: string;
  traditionalManifest: string;
  exit: string;
  states: string;
  vehicles: string;
}

export const SlideMenuLabels: Record<UserLanguage, ISlideMenuLabel> = {
  fa: {
    dashboard: 'داشبورد',
    basicInformation: 'اطلاعات پایه',
    cities: 'شهرها',
    stations: 'ایستگاه ها',
    offices: 'دفاتر',
    drivers: 'راننده ها',
    routes: 'مسیرها',
    vehicleTypes: 'وسیله نقلیه',
    home: 'خانه',
    exportWaybill: 'صدور بارنامه',
    historyWaybill: 'بارنامه های صادر شده',
    cargoInsideStore: 'بارهای داخل انبار',
    accountReport: 'گزارش بدهی ها',
    report: 'گزارش ',
    demandReport: 'گزارش مطالبات',
    debtReport: 'گزارش بدهی ',
    incomeReport: 'گزارش درآمد',
    expenseReport: 'گزارش هزینه',
    assetReport: 'گزارش دارایی',

    exit: 'خروج',
    serviceItems: 'بار سرویس ها',
    services: 'سرویس ها',
    manifest: 'مانیفست های صادر شده',
    traditionalManifest: 'مانیفست های سنتی',
    states: 'استان ها',
    printers: 'پرینتر ها',
    vehicles: 'وسایل نقلیه',
  },
  en: {
    dashboard: 'Dashboard',
    basicInformation: 'Basic Information',
    cities: 'Cities',
    stations: 'Stations',
    offices: 'Offices',
    drivers: 'Drivers',
    routes: 'Routes',
    vehicleTypes: 'Vehicle',
    home: 'Home',
    serviceItems: 'service Items',
    report: 'report',
    demandReport: 'demandReport',
    debtReport: 'debtReport',
    incomeReport: 'incomeReport',
    expenseReport: 'expenseReport',
    assetReport: 'assetReport',
    services: 'services',
    manifest: 'manifest',
    traditionalManifest: 'Traditional Manifest',
    exportWaybill: 'Export waybill',
    historyWaybill: 'History waybill',
    printers: 'printers',
    cargoInsideStore: 'Cargo inside store',
    exit: 'exit',
    states: 'States',
    vehicles: 'Vehicles',
    accountReport: 'Account Report',
  },
};
