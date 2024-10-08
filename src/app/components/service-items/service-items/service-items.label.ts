import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServiceItems {
  tableReceiverName: string;
  tableDate: string;
  tableOriginCity: string;
  tableOriginOfficeName: string;
  tableDestinationCity: string;
  tableDestinationOfficeName: string;
  tableWeight: string;
  tableTotalItemsOfBill: string;
  tableItemNo: string;
  tableBillCode: string;
  outgoingContentCardTitle: string;
  incomingContentCardTitle: string;
  searchServiceTitle: string;
  search: string;
  tableDriverMobilePhone: string;
  tableDriverFullName: string;
  tableCarrierCode: string;
  tableServiceNo: string;
  tableServiceCode: string;
  tableAction: string;
  offLoadDescription: string;
  offLoadCancelBtn: string;
  offLoadConfirmBtn: string;
  offLoadTitle: string;
  label: string;
  print: string;
  offLoad: string;
}

export const ServiceItemsLabels: Record<UserLanguage, IServiceItems> = {
  fa: {
    tableBillCode: 'شماره بارنامه',
    tableDate: 'تاریخ',
    tableReceiverName: 'نام گیرنده',
    tableOriginCity: 'مبدا',
    tableOriginOfficeName: 'ایستگاه مبدا',
    tableDestinationCity: 'مقصد',
    tableDestinationOfficeName: 'ایستگاه مقصد',
    tableWeight: 'وزن',
    tableTotalItemsOfBill: 'اقلام',
    tableItemNo: 'قطعه',
    tableAction: 'عملیات',
    outgoingContentCardTitle: 'بارهای خروجی',
    incomingContentCardTitle: 'بارهای  ورودی',
    search: 'جستجو',
    searchServiceTitle: 'جستجوی سرویس',

    tableDriverMobilePhone: 'همراه راننده',
    tableDriverFullName: 'نام راننده',
    tableCarrierCode: 'شرکت',
    tableServiceNo: 'شماره سرویس',
    tableServiceCode: 'کد سرویس',
    offLoadDescription: 'از پیاده کردن بار اطمینان دارید ؟',
    offLoadCancelBtn: 'بستن',
    offLoadConfirmBtn: 'پیاده کردن',
    offLoadTitle: 'پیاده کردن',
    label: 'لیبل',
    print: 'پرینت',
    offLoad: 'پیاده کردن',
  },
  en: {
    tableReceiverName: 'tableReceiverName',
    tableDate: 'tableDate',
    tableBillCode: 'tableBillCode',
    tableOriginCity: 'tableOriginCity',
    tableOriginOfficeName: 'tableOriginOfficeName  ',
    tableDestinationCity: 'tableDestinationCity',
    tableDestinationOfficeName: 'tableDestinationOfficeName',
    tableWeight: 'tableWeight',
    tableTotalItemsOfBill: 'tableTotalItemsOfBill',
    tableItemNo: 'tableItemNo',
    tableAction: 'tableHeaderAction',
    outgoingContentCardTitle: 'outgoingContentCardTitle',
    incomingContentCardTitle: 'incomingContentCardTitle',
    search: 'search',
    searchServiceTitle: 'searchServiceTitle',
    tableDriverMobilePhone: 'driverMobilePhone',
    tableDriverFullName: 'driverFullName',
    tableCarrierCode: 'carrierCode',
    tableServiceNo: 'serviceNo',
    tableServiceCode: 'serviceCode',
    offLoadDescription: 'offLoadDescription',
    offLoadCancelBtn: 'offLoadCancelBtn',
    offLoadConfirmBtn: 'offLoadConfirmBtn',
    offLoadTitle: 'offLoadTitle',
    label: 'label',
    print: 'print',
    offLoad: 'offLoad',
  },
};
