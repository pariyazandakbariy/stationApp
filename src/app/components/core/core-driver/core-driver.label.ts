import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IDriverLabel {
  validation: string;
  selectDriver: string;
  searchDriver: string;
  nothingFound: string;
  pleaseWait: string;
}

export const Labels: Record<UserLanguage, IDriverLabel> = {
  fa: {
    validation: 'این فیلد خالی است',
    selectDriver: 'انتخاب راننده',
    searchDriver: 'جستجوی راننده',
    nothingFound: 'موردی یافت نشد',
    pleaseWait: 'لطفا صبر کنید',
  },
  en: {
    validation: 'This field is empty',
    selectDriver: 'Select driver',
    searchDriver: 'Search driver',
    nothingFound: 'Nothing found',
    pleaseWait: 'please Wait',
  },
};
