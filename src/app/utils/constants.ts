export enum IconInput {
  Password = 'Password',
  Text = 'Text',
  EmailPhone = 'EmailPhone',
  Phone = 'Phone',
  Editable = 'Editable',
  Verified = 'Verified',
  NotVerified = 'NotVerified',
  OwnerName = 'OwnerName',
  totalAmount = 'totalAmount',
  totalRows = 'totalRows',
  Date = 'Date',
}

export const packageTypes = [
  {
    title: 'جعبه',
    value: 'BOX',
  },
  {
    title: 'پاکت',
    value: 'PACKET',
  },
  {
    title: 'نایلون',
    value: 'NYLON',
  },
];
export enum COLUMNS_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  SELECTOR = 'selector',
  ROW_SELECTOR = 'row-selector',
  STATUS = 'status',
  STATUS_ACTIVE = 'status-active',
  ACTION = 'action',
  ACTION_BUTTONS = 'action-buttons',
  SHAMSI_DATE = 'shamsi-date',
  MULTI_COLUMN = 'multiColumn',
  PELAK = 'pelak',
  DETAIL_VIEWER_FOR_REPORT = 'detail-viewer-for-report',
}

export const getFromOriginList = [
  { value: 'STATION', title: 'تحوبل به نمایندگی' },
  { value: 'DOOR', title: 'تحوبل از درب ' },
];
export const getFromDestinationList = [
  { value: 'STATION', title: 'دریافت از نمایندگی' },
  { value: 'DOOR', title: 'دریافت از درب ' },
];

export const packageSizeTypeList = [
  { value: true, title: 'اندازه استاندارد' },
  { value: false, title: 'وارد کردن اندازه به صورت دستی ' },
];

export enum TOAST_MESSAGES {
  SUCCESSFUL_CREATE = 'با موفقیت ثبت شد',
  SUCCESSFUL_EDIT = 'با موفقیت ویرایش شد',
  SUCCESSFUL_DELETED = 'با موفقیت حذف شد ',
  SUCCESSFUL_VOID = 'با موفقیت ابطال شد ',
}

export const daysOfWeek = [
  {
    key: '1',
    value: 'شنبه',
  },
  {
    key: '2',
    value: 'یک شنبه',
  },
  {
    key: '3',
    value: 'دو شنبه',
  },
  {
    key: '4',
    value: 'سه شنبه',
  },
  {
    key: '5',
    value: 'چهار شنبه',
  },
  {
    key: '6',
    value: 'پنج شنبه',
  },
  {
    key: '7',
    value: 'جمعه',
  },
];
export const Letters = [
  {
    key: 2,
    value: 'ب',
  },
  {
    key: 3,
    value: 'پ',
  },
  {
    key: 4,
    value: 'ت',
  },
  {
    key: 5,
    value: 'ث',
  },
  {
    key: 6,
    value: 'ج',
  },
  {
    key: 7,
    value: 'د',
  },
  {
    key: 8,
    value: 'ز',
  },
  {
    key: 9,
    value: 'س',
  },
  {
    key: 10,
    value: 'ش',
  },
  {
    key: 11,
    value: 'ص',
  },
  {
    key: 12,
    value: 'ط',
  },
  {
    key: 13,
    value: 'ع',
  },
  {
    key: 14,
    value: 'ف',
  },
  {
    key: 15,
    value: 'ق',
  },
  {
    key: 16,
    value: 'ک',
  },
  {
    key: 17,
    value: 'گ',
  },
  {
    key: 18,
    value: 'ل',
  },
  {
    key: 19,
    value: 'م',
  },
  {
    key: 20,
    value: 'ن',
  },
  {
    key: 21,
    value: 'و',
  },
  {
    key: 22,
    value: 'ه',
  },
  {
    key: 23,
    value: 'ی',
  },
];
export const Gender = [
  { value: 'M', title: 'مرد' },
  { value: 'F', title: 'زن ' },
];
