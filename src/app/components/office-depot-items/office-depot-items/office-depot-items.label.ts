import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IOfficeDepotItem {
  tabToDelivery: string;
  tabToTransfer: string;
}

export const Labels: Record<UserLanguage, IOfficeDepotItem> = {
  fa: {
    tabToDelivery: 'بارهای آماده تحویل',
    tabToTransfer: 'بارهای آماده ارسال',
  },
  en: {
    tabToDelivery: 'Delivery To Items',
    tabToTransfer: 'Transfer To Items',
  },
};
