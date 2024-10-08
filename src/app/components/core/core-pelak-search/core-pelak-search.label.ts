import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IPelakSearchLabel {
  searchVehicle: string;
  nothingFound: string;
}

export const Labels: Record<UserLanguage, IPelakSearchLabel> = {
  fa: {
    searchVehicle: 'جستجوی وسیله نقلیه',
    nothingFound: 'موردی یافت نشد',
  },
  en: {
    searchVehicle: 'Search vehicle',
    nothingFound: 'Nothing found',
  },
};
