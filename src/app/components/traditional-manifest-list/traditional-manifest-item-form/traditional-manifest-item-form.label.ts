import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ITraditionalManifestFormLabel {
  tableHeaderBillCode: string;
  tableHeaderDate: string;
  tableHeaderName: string;
  tableHeaderItemCount: string;
  tableHeaderPhoneNumber: string;
  tableHeaderTotalPrice: string;
  tableHeaderManifestNumber: string;
  tableHeaderDescription: string;
  tableHeaderAction: string;
  addTraditional: string;
  editTraditional: string;
  add: string;
  addAndClear: string;
  edit: string;
  close: string;
  delete: string;
  confirmDeleteText: string;
  confirmDeleteTitle: string;

  tableHeaderCityServicesAmount: string;
  tableHeaderExtraServicesAmount: string;
  tableHeaderTransitServicesAmount: string;
  tableHeaderPrepaymentAmount: string;
}

export const Labels: Record<UserLanguage, ITraditionalManifestFormLabel> = {
  fa: {
    tableHeaderBillCode: 'شماره بارنامه',
    tableHeaderDate: 'تاریخ',
    tableHeaderItemCount: 'تعداد آیتم',
    tableHeaderName: 'نام دریافت کننده',
    tableHeaderPhoneNumber: 'همراه دریافت کننده',
    tableHeaderTotalPrice: 'مبلغ بارنامه',
    tableHeaderManifestNumber: 'شماره مانیفست',
    tableHeaderDescription: 'توضیحات',
    tableHeaderAction: 'عملیات',
    tableHeaderCityServicesAmount: 'خدمات شهری',
    tableHeaderExtraServicesAmount: 'خدمات مازاد',
    tableHeaderTransitServicesAmount: 'خدمات حمل و نقل',
    tableHeaderPrepaymentAmount: 'پیش پرداخت',
    addTraditional: 'افزودن آیتم مانیفست',
    editTraditional: 'ویرایش آیتم مانیفست',
    add: 'افزودن',
    addAndClear: 'ذخیره و بعدی',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    delete: 'حذف',
    confirmDeleteText: 'از حذف آیتم مانیفست اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف آیتم مانیفست',
  },
  en: {
    tableHeaderBillCode: 'Name',
    tableHeaderDate: 'Type',
    tableHeaderName: 'Channel',
    tableHeaderItemCount: 'Item count',
    tableHeaderPhoneNumber: 'Brand',
    tableHeaderTotalPrice: 'TotalPrice',
    tableHeaderManifestNumber: 'PrinterNo',
    tableHeaderDescription: 'DriverAddress',
    tableHeaderAction: 'Action',
    tableHeaderCityServicesAmount: 'CityServicesAmount',
    tableHeaderExtraServicesAmount: 'ExtraServicesAmount',
    tableHeaderTransitServicesAmount: 'TransitServicesAmount',
    tableHeaderPrepaymentAmount: 'PrepaymentAmount',
    addTraditional: 'addPrinter',
    editTraditional: 'editPrinter',
    add: 'add',
    addAndClear: 'addAndClear',
    edit: 'edit',
    close: 'close',
    delete: 'delete',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
  },
};
