import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IScannerLabelDialog {
  dialogTitle: string;
  dialogMessage: string;
  buttonLabelCancel: string;
  buttonLabelSubmit: string;
  selectedPrint: string;
}

export const Labels: Record<UserLanguage, IScannerLabelDialog> = {
  fa: {
    dialogTitle: 'اسکن',
    dialogMessage: 'لطفا پرینتر مورد نظر را انتخاب کنید',
    buttonLabelCancel: 'انصراف',
    buttonLabelSubmit: 'چاپ لیبل',
    selectedPrint: 'انتخاب پرینتر',
  },

  en: {
    dialogTitle: 'Scan',
    dialogMessage: 'Are you sure to logout?',
    buttonLabelCancel: 'Cancel',
    buttonLabelSubmit: 'Logout',
    selectedPrint: 'Selected Print',
  },
};
