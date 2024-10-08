import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ITabelNoContent {
  noResult: string;
}

export const Label: Record<UserLanguage, ITabelNoContent> = {
  fa: {
    noResult: 'موردی یافت نشد',
  },
  en: {
    noResult: 'No Result',
  },
};
