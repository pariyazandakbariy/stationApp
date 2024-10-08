import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IDriversLabel {
  titleCardTitle: string;
  titleCardDescription: string;
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableHeaderFirstName: string;
  tableHeaderLastName: string;
  tableHeaderNationalCode: string;
  tableHeaderGender: string;
  tableHeaderMobilePhone: string;
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

export const Labels: Record<UserLanguage, IDriversLabel> = {
  fa: {
    titleCardTitle: 'راننده ها',
    titleCardDescription:
      'در این بخش می توانید لیست راننده ها را مدیریت کنید. با کلیک روی هرکدام از آیتم ها میتوانید آنها را ویرایش یا حذف کنید.',
    contentCardTitle: 'راننده ها',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableHeaderFirstName: 'نام',
    tableHeaderLastName: 'نام خانوادگی',
    tableHeaderNationalCode: 'کد ملی',
    tableHeaderGender: 'جنسیت',
    tableHeaderMobilePhone: 'شماره موبایل',
    tableAction: 'عملیات',
    addPrinter: 'افزودن راننده',
    editPrinter: 'ویرایش راننده',
    add: 'افزودن',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    delete: 'حذف',
    confirmDeleteText: 'از حذف راننده اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف راننده',
  },
  en: {
    titleCardTitle: 'Drivers',
    titleCardDescription:
      'In this Driver, you can manage list of printers.By clicking on any of items, you can edit or delete them',
    contentCardTitle: 'Drivers',
    search: 'search',
    addButtonName: 'add',
    tableHeaderFirstName: 'FirstName',
    tableHeaderLastName: 'LastName',
    tableHeaderNationalCode: 'NationalCode',
    tableHeaderGender: 'Gender',
    tableHeaderMobilePhone: 'Mobile phone',
    tableAction: 'Action',
    addPrinter: 'addDriver',
    editPrinter: 'editDriver',
    add: 'add',
    edit: 'edit',
    close: 'close',
    delete: 'delete',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
  },
};
