import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IVoidBill {
  vildBillTitle: string;
  reasonVoid: string;
  commentVoidBill: string;
  voidBillConfirmBtn: string;
  voidBillCancelBtn: string;
}

export const Labels: Record<UserLanguage, IVoidBill> = {
  fa: {
    vildBillTitle: 'ابطال بارنامه ',
    reasonVoid: 'لطفا دلیل ابطال بارنامه را وارد نمایید.',
    commentVoidBill: 'توضیحات',
    voidBillConfirmBtn: 'ابطال',
    voidBillCancelBtn: 'انصراف',
  },
  en: {
    vildBillTitle: 'Void Bill',
    reasonVoid: 'Why do you want to void?',
    voidBillConfirmBtn: 'Void',
    voidBillCancelBtn: 'Cancel',
    commentVoidBill: 'Comment Void Bill',
  },
};
