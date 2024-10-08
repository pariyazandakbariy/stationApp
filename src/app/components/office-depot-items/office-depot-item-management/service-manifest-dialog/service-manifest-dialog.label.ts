import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IServiceManifestDialogLabel {
  dialogTitle: string;
  total: string;
  buttonLabelCancel: string;
  buttonSubmit: string;
  tableHeaderId: string;
  tableHeaderServiceFreightShare: string;
  tableHeaderFreightCollectAmount: string;
  tableHeaderPayToServiceAmount: string;
  tableHeaderReceiveFromServiceAmount: string;
  description: string;
  voidConfirmDialogTitle: string;
  voidConfirmDialogText: string;
  voidConfirmDialogCancelBtn: string;
  voidConfirmDialogConfirmBtn: string;

  boardConfirmDialogTitle: string;
  boardConfirmDialogText: string;
  boardConfirmDialogCancelBtn: string;
  boardConfirmDialogConfirmBtn: string;
}

export const Labels: Record<UserLanguage, IServiceManifestDialogLabel> = {
  fa: {
    dialogTitle: 'تحویل بار به سرویس',
    buttonLabelCancel: 'ابطال مانیفست',
    buttonSubmit: 'تایید مانیفست',
    total: 'مجموع',
    tableHeaderId: 'شماره بارنامه',
    tableHeaderServiceFreightShare: 'کرایه حمل',
    tableHeaderFreightCollectAmount: 'پس کرایه',
    tableHeaderPayToServiceAmount: 'قابل پرداخت به راننده',
    tableHeaderReceiveFromServiceAmount: 'قابل دریافت از راننده',
    description:
      'مانیفست با موفقیت ایجاد گردید ، لطفا آیتم های آن را بررسی کرده و تایید نمایید .',
    voidConfirmDialogTitle: 'ابطال مانیفست',
    voidConfirmDialogText: 'از ابطال مانیفست اطمینان دارید ؟',
    voidConfirmDialogCancelBtn: 'بستن',
    voidConfirmDialogConfirmBtn: 'ابطال مانیفست',

    boardConfirmDialogTitle: 'تایید مانیفست',
    boardConfirmDialogText: 'از تایید مانیفست اطمینان دارید ؟',
    boardConfirmDialogCancelBtn: 'بستن',
    boardConfirmDialogConfirmBtn: 'تایید مانیفست',
  },

  en: {
    dialogTitle: 'Logout?',
    buttonLabelCancel: 'Cancel',
    buttonSubmit: 'Submit',
    total: 'total',
    tableHeaderId: 'Id',
    tableHeaderServiceFreightShare: 'Service Freight Share',
    tableHeaderFreightCollectAmount: 'Freight Collect Amount',
    tableHeaderPayToServiceAmount: 'Pay To Service Amount',
    tableHeaderReceiveFromServiceAmount: 'Receive From Service Amount',
    description: ' ',
    voidConfirmDialogTitle: '',
    voidConfirmDialogText: '',
    voidConfirmDialogCancelBtn: '',
    voidConfirmDialogConfirmBtn: '',

    boardConfirmDialogTitle: '',
    boardConfirmDialogText: '',
    boardConfirmDialogCancelBtn: '',
    boardConfirmDialogConfirmBtn: '',
  },
};
