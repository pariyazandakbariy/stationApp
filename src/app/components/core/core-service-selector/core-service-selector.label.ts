import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServiceSelectorLabel {
  validation: string;
  selectService: string;
  searchService: string;
  nothingFound: string;
  toDate: string;
  fromDate: string;
  search: string;
  pleaseWait: string;
  addButtonName: string;
}

export const Labels: Record<UserLanguage, IServiceSelectorLabel> = {
  fa: {
    validation: 'این فیلد خالی است',
    selectService: 'انتخاب سرویس',
    searchService: 'جستجوی سرویس',
    nothingFound: 'موردی یافت نشد',
    toDate: 'تا تاریخ',
    fromDate: 'از تاریخ',
    search: 'جستجو',
    pleaseWait: 'لطفا صبر کنید',
    addButtonName: 'جدید',
  },
  en: {
    validation: 'This field is empty',
    selectService: 'Select service',
    searchService: 'Search service',
    nothingFound: 'Nothing found',
    fromDate: 'From date',
    toDate: 'To date',
    search: 'Search',
    pleaseWait: 'Please Wait',
    addButtonName: 'add service',
  },
};
