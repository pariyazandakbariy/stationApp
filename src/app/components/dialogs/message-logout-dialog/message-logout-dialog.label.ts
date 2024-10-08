import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IMessageDialogLabel {
  dialogTitle: string;
  dialogMessage: string;
  buttonLabelCancel: string;
  buttonLabelLogout: string;
}

export const MessageLabels: Record<UserLanguage, IMessageDialogLabel> = {
  fa: {
    dialogTitle: 'خروج',
    dialogMessage: 'آیا از خروج اطمینان دارید؟',
    buttonLabelCancel: 'انصراف',
    buttonLabelLogout: 'خروج',
  },

  en: {
    dialogTitle: 'Logout?',
    dialogMessage: 'Are you sure to logout?',
    buttonLabelCancel: 'Cancel',
    buttonLabelLogout: 'Logout',
  },
};
