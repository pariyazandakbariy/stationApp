import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IPrintersLabel {
  titleCardTitle: string;
  titleCardDescription: string;
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableHeaderPrinterName: string;
  tableHeaderPrinterType: string;
  tableHeaderChannel: string;
  tableHeaderBrand: string;
  tableHeaderModel: string;
  tableHeaderPrinterNo: string;
  tableHeaderDriverAddress: string;
  tableAction: string;
  addPrinter: string;
  editPrinter: string;
  add: string;
  edit: string;
  close: string;
  delete: string;
  confirmDeleteText: string;
  confirmDeleteTitle: string;
}

export const PrintersLabels: Record<UserLanguage, IPrintersLabel> = {
  fa: {
    titleCardTitle: 'پرینترها',
    titleCardDescription:
      'در این بخش می توانید لیست پرینترها را مدیریت کنید. با کلیک روی هرکدام از آیتم ها میتوانید آنها را ویرایش یا حذف کنید.',
    contentCardTitle: 'پرینترها',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableHeaderPrinterName: 'نام',
    tableHeaderPrinterType: 'نوع',
    tableHeaderChannel: 'کانال',
    tableHeaderBrand: 'برند',
    tableHeaderModel: 'مدل',
    tableHeaderPrinterNo: 'شماره',
    tableHeaderDriverAddress: 'آدرس',
    tableAction: 'عملیات',
    addPrinter: 'افزودن پرینتر',
    editPrinter: 'ویرایش پرینتر',
    add: 'افزودن',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    delete: 'حذف',
    confirmDeleteText: 'از حذف پرینتر اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف پرینتر',
  },
  en: {
    titleCardTitle: 'printers',
    titleCardDescription:
      'In this printer, you can manage list of printers.By clicking on any of items, you can edit or delete them',
    contentCardTitle: 'printers',
    search: 'search',
    addButtonName: 'add',
    tableHeaderPrinterName: 'Name',
    tableHeaderPrinterType: 'Type',
    tableHeaderChannel: 'Channel',
    tableHeaderBrand: 'Brand',
    tableHeaderModel: 'Model',
    tableHeaderPrinterNo: 'PrinterNo',
    tableHeaderDriverAddress: 'DriverAddress',
    tableAction: 'Action',
    addPrinter: 'addPrinter',
    editPrinter: 'editPrinter',
    add: 'add',
    edit: 'edit',
    close: 'close',
    delete: 'delete',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
  },
};
