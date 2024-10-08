import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IOfficeDepotItemContent {
  contentCardTitle: string;
  search: string;
  addButtonName: string;
  tableBillCode: string;
  tableItemNo: string;
  tableLeftPayment: string;
  tableBillDateTime: string;
  tableReceiverName: string;
  tableOriginCity: string;
  tableOriginOfficeName: string;
  tableDestinationCity: string;
  tableDestinationOfficeName: string;
  tableLastActionDateTime: string;
  tableWeight: string;
  tableLength: string;
  tableWidth: string;
  tableHeight: string;
  tableTotalItemsOfBill: string;
  tableAction: string;
  add: string;
  tableEdit: string;
  close: string;
  select: string;
  label: string;
  print: string;
  disAggregate: string;
}

export const Labels: Record<UserLanguage, IOfficeDepotItemContent> = {
  fa: {
    contentCardTitle: 'لیست بارهای آماده ارسال',
    search: 'جستجو',
    addButtonName: 'جدید',
    tableBillCode: 'شماره بارنامه',
    tableItemNo: 'شماره قطعه',
    tableLeftPayment: 'پس کرایه',
    tableBillDateTime: 'تاریخ صدور',
    tableReceiverName: 'نام گیرنده',
    tableOriginCity: 'مبدا',
    tableOriginOfficeName: 'ایستگاه مبدا',
    tableDestinationCity: 'مقصد',
    tableDestinationOfficeName: 'ایستگاه مقصد',
    tableLastActionDateTime: 'تارخ ورود به انبار',
    tableWeight: 'وزن',
    tableLength: 'طول',
    tableWidth: 'عرض',
    tableHeight: 'ارتفاع',
    tableTotalItemsOfBill: 'اقلام',
    tableAction: 'چاپ',
    tableEdit: 'اعمال تغییرات  ',
    add: 'افزودن  ',
    close: 'بستن',
    select: 'انتخاب',
    label: 'لیبل',
    print: 'پرینت',
    disAggregate: 'مجموع',
  },
  en: {
    contentCardTitle: '',
    search: 'search',
    addButtonName: 'new',
    tableBillCode: 'ID',
    tableItemNo: 'Item No',
    tableLeftPayment: 'Left payment',
    tableBillDateTime: 'Bill Date Time',
    tableReceiverName: 'Receiver Name',
    tableOriginCity: 'Origin',
    tableOriginOfficeName: 'Origin Office Name',
    tableDestinationCity: 'Destination',
    tableDestinationOfficeName: 'Destination Office Name',
    tableLastActionDateTime: 'tableLastActionDateTime',
    tableWeight: 'Weight',
    tableLength: 'Length',
    tableWidth: 'Width',
    tableHeight: 'Height',
    tableTotalItemsOfBill: 'Total Items Of Bill',
    tableAction: 'Show',
    tableEdit: 'edit',
    add: 'add',
    close: 'close',
    select: 'select',
    label: 'label',
    print: 'print',
    disAggregate: 'Dis aggregate',
  },
};
