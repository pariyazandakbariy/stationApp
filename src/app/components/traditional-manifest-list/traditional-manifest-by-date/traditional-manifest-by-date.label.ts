import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IManifestByDate {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableTraditionalManifestID: string;
  tableManifestDateTime: string;
  tableOriginCity: string;
  tableTraditionalManifestItemLength: string;
  tableServiceCode: string;
  tableHeaderAction: string;
  tableHeaderStatus: string;
  add: string;
  tableEdit: string;
  close: string;
  fromDate: string;
  toDate: string;
  delete: string;
  edit: string;
  confirmDeleteText: string;
  confirmDeleteTitle: string;
  tableHeaderAdd: string;
  tableHeaderEdit: string;
  detail: string;
}

export const Labels: Record<UserLanguage, IManifestByDate> = {
  fa: {
    contentCardTitle: 'لیست مانیفست های سنتی',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableTraditionalManifestID: 'شماره مانیفست',
    tableManifestDateTime: 'تاریخ',
    tableOriginCity: 'مبدا',
    tableServiceCode: 'کد سرویس',
    tableTraditionalManifestItemLength: 'تعداد آیتم ها',
    tableHeaderAction: 'عملیات',
    tableEdit: 'اعمال تغییرات',
    add: 'افزودن  ',
    close: 'بستن',
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    delete: 'حذف',
    edit: 'اعمال تغییرات',
    confirmDeleteText: 'از حذف مانیفست سنتی اطمینان دارید ؟',
    confirmDeleteTitle: 'حذف مانیفست سنتی',
    tableHeaderAdd: 'افزودن مانیفست سنتی',
    tableHeaderEdit: 'ویرایش مانیفست سنتی',
    tableHeaderStatus: 'وضعیت',
    detail: 'نمایش',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    tableTraditionalManifestID: 'ID',
    tableManifestDateTime: 'Date Time',
    tableOriginCity: 'Origin',
    tableHeaderAction: 'Show',
    tableServiceCode: 'Service Code',
    tableTraditionalManifestItemLength: 'Number',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    fromDate: 'From date',
    toDate: 'To date',
    delete: 'delete',
    edit: 'edit',
    confirmDeleteText: 'confirmDeleteText',
    confirmDeleteTitle: 'confirmDeleteTitle',
    tableHeaderAdd: 'Add Traditinal Manifest',
    tableHeaderEdit: 'Edit Traditinal Manifest',
    tableHeaderStatus: 'Status',
    detail: 'detail',
  },
};
