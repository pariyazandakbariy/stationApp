import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IVehiclesLabel {
  titleCardTitle: string;
  titleCardDescription: string;
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  ownerFullName: string;
  ownerMobilePhone: string;
  tableHeaderOwnerFullName: string;
  tableHeaderOwnerMobilePhone: string;
  tableHeaderCarrier: string;
  tableHeaderVehicleType: string;
  tableHeaderRegister: string;
  tableHeaderVehicleTypeName: string;
  courier: string;
  transporter: string;
  tableAction: string;
  addPrinter: string;
  editPrinter: string;
  add: string;
  edit: string;
  close: string;
  delete: string;
  confirmDeleteText: string;
  confirmDeleteTitle: string;
  settlementOffice: string;
  settlementVehicle: string;
}

export const Labels: Record<UserLanguage, IVehiclesLabel> = {
  fa: {
    titleCardTitle: 'وسایل نقلیه',
    titleCardDescription:
      'در این بخش می توانید لیست وسایل نقلیه را مدیریت کنید. با کلیک روی هرکدام از آیتم ها میتوانید آنها را ویرایش یا حذف کنید.',
    contentCardTitle: 'وسایل نقلیه',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableHeaderOwnerFullName: ' نام و نام خانوادگی ',
    tableHeaderOwnerMobilePhone: 'شماره موبایل ',
    ownerFullName: ' نام و نام خانوادگی صاحب وسیله نقلیه',
    ownerMobilePhone: 'شماره موبایل صاحب وسیله نقلیه',
    tableHeaderCarrier: 'شرکت',
    tableHeaderVehicleType: 'نوع وسیله نقلیه',
    tableHeaderRegister: 'شماره پلاک',
    tableHeaderVehicleTypeName: 'نام وسیله نقلیه',
    courier: 'پیک (سفیر)',
    transporter: ' برون شهری (رهسپار)',
    tableAction: 'عملیات',
    addPrinter: 'افزودن وسیله نقلیه',
    editPrinter: 'ویرایش وسیله نقلیه',
    add: 'افزودن',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    delete: 'حذف',
    confirmDeleteText: 'از حذف وسیله نقلیه اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف وسیله نقلیه',
    settlementOffice: 'پرداخت وجه به وسیله نقلیه',
    settlementVehicle: 'دریافت وجه از وسیله نقلیه',
  },
  en: {
    titleCardTitle: 'Vehicles',
    titleCardDescription:
      'In this vehicle, you can manage list of Vehicles.By clicking on any of items, you can edit or delete them',
    contentCardTitle: 'Vehicles',
    search: 'search',
    addButtonName: 'add',
    ownerFullName: 'Owner full name',
    ownerMobilePhone: 'Owner mobilePhone',
    tableHeaderOwnerFullName: 'Name',
    tableHeaderOwnerMobilePhone: 'MobilePhone',
    tableHeaderCarrier: 'Carrier',
    tableHeaderVehicleType: 'VehicleType',
    tableHeaderRegister: 'Register',
    tableHeaderVehicleTypeName: 'VehicleType Name',
    courier: 'courier',
    transporter: 'transporter',
    tableAction: 'Action',
    addPrinter: 'addPrinter',
    editPrinter: 'editPrinter',
    add: 'add',
    edit: 'edit',
    close: 'close',
    delete: 'delete',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
    settlementOffice: 'settlementOffice',
    settlementVehicle: 'settlementVehicle',
  },
};
