import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISendRoutLabel {
  headerTitle: string;
  deliveryTimeLabel: string;
  buttonLabel: string;
  dialogTitle: string;
  tax: string;
  transportationCosts: string;
  complications: string;
  originFreight: string;
  balancePayable: string;
}

export const Labels: Record<UserLanguage, ISendRoutLabel> = {
  fa: {
    headerTitle: 'شیوه ارسال',
    deliveryTimeLabel: 'مدت زمان تحویل',
    buttonLabel: 'ادامه',
    dialogTitle: 'انتخاب مسیر',
    tax: 'مالیات بر ارزش افزوده',
    transportationCosts: 'هزینه حمل',
    complications: 'عوارض و شارژ',
    originFreight: 'پس کرایه',
    balancePayable: 'مانده قابل پرداخت',
  },
  en: {
    headerTitle: 'Sending Method',
    deliveryTimeLabel: 'Delivery Time',
    buttonLabel: 'Continue',
    dialogTitle: 'select route',
    tax: 'Tax',
    transportationCosts: 'Transportation costs',
    complications: 'Complications',
    originFreight: 'Before freight',
    balancePayable: 'Balance payable',
  },
};
