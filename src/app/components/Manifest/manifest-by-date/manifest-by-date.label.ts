import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IManifestByDate {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableManifestId: string;
  tableManifestDateTime: string;
  tableOriginCity: string;
  tableOriginOffice: string;
  tableDestinationCity: string;
  tableDestinationOffice: string;
  tableIssuerUserCode: string;
  tableServiceCode: string;
  tableHeaderAction: string;
  tableStatus: string;
  tableManifestItemLength: string;
  add: string;
  tableEdit: string;
  close: string;
  fromDate: string;
  toDate: string;
  detail: string;
  print: string;
  void: string;
}

export const Labels: Record<UserLanguage, IManifestByDate> = {
  fa: {
    contentCardTitle: 'لیست مانیفست های صادر شده',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableManifestId: 'شماره ',
    tableManifestDateTime: 'تاریخ صدور ',
    tableIssuerUserCode: 'نام کاربر',
    tableOriginCity: 'مبدا',
    tableOriginOffice: 'ایستگاه مبدا',
    tableDestinationCity: 'مقصد',
    tableDestinationOffice: 'ایستگاه مقصد',
    tableServiceCode: 'کد سرویس',
    tableManifestItemLength: 'تعداد آیتم ها',
    tableHeaderAction: 'مشاهده',
    tableStatus: 'وضعبت',
    tableEdit: 'اعمال تغییرات  ',
    add: 'افزودن  ',
    close: 'بستن',
    fromDate: 'از تاریخ',
    toDate: 'تا تاریخ',
    detail: 'نمایش',
    print: 'پرینت',
    void: 'ابطال',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    tableManifestId: 'Manifest ID',
    tableManifestDateTime: 'Manifest Date Time',
    tableIssuerUserCode: 'Issuer User Code',
    tableManifestItemLength: 'manifest Item Length',
    tableOriginCity: 'Origin',
    tableDestinationCity: 'Destination',
    tableOriginOffice: 'Origin Office',
    tableDestinationOffice: 'Destination Office',
    tableHeaderAction: 'Show',
    tableStatus: 'Status',
    tableServiceCode: 'Service Code',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    fromDate: 'From date',
    toDate: 'To date',
    detail: 'detail',
    print: 'print',
    void: 'void',
  },
};
