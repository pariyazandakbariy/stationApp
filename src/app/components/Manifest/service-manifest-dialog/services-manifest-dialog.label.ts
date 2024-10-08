import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServiceManifestDialogLabel {
  dialogTitle: string;
  total: string;
  buttonLabelCancel: string;
  buttonLabelClose: string;
  buttonSubmit: string;
  tableHeaderId: string;
  tableHeaderServiceFreightShare: string;
  tableHeaderFreightCollectAmount: string;
  tableHeaderPayToServiceAmount: string;
  tableHeaderReceiveFromServiceAmount: string;
}

export const Labels: Record<UserLanguage, IServiceManifestDialogLabel> = {
  fa: {
    dialogTitle: 'اطلاعات مانیفست',
    buttonLabelClose: 'بستن',
    buttonLabelCancel: 'انصراف',
    buttonSubmit: 'تایید',
    total: 'مجموع',
    tableHeaderId: 'شماره بارنامه',
    tableHeaderServiceFreightShare: 'کرایه حمل',
    tableHeaderFreightCollectAmount: 'پس کرایه',
    tableHeaderPayToServiceAmount: 'قابل پرداخت به راننده',
    tableHeaderReceiveFromServiceAmount: 'قابل دریافت از راننده',
  },

  en: {
    dialogTitle: 'Logout?',
    buttonLabelCancel: 'Cancel',
    buttonSubmit: 'Submit',
    buttonLabelClose: 'Close',
    total: 'total',
    tableHeaderId: 'Id',
    tableHeaderServiceFreightShare: 'Service Freight Share',
    tableHeaderFreightCollectAmount: 'Freight Collect Amount',
    tableHeaderPayToServiceAmount: 'Pay To Service Amount',
    tableHeaderReceiveFromServiceAmount: 'Receive From Service Amount',
  },
};
