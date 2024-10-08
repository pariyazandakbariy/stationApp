import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IVoidManifestDialog {
  voidConfirmDialogTitle: string;
  voidConfirmDialogText: string;
  voidConfirmDialogCancelBtn: string;
  voidConfirmDialogConfirmBtn: string;
}

export const VoidManifestDialogLabels: Record<
  UserLanguage,
  IVoidManifestDialog
> = {
  fa: {
    voidConfirmDialogTitle: 'ابطال مانیفست',
    voidConfirmDialogText: 'از ابطال مانیفست اطمینان دارید ؟',
    voidConfirmDialogCancelBtn: 'بستن',
    voidConfirmDialogConfirmBtn: 'ابطال مانیفست',
  },
  en: {
    voidConfirmDialogTitle: '',
    voidConfirmDialogText: '',
    voidConfirmDialogCancelBtn: '',
    voidConfirmDialogConfirmBtn: '',
  },
};
