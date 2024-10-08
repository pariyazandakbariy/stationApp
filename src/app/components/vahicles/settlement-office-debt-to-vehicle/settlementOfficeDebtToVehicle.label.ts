import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISettlementOfficeDebtToVehicleLabel {
  title: string;
  amount: string;
  receiptNo: string;
  description: string;
  date: string;
  time: string;
  submit: string;
  close: string;
}

export const SettlementOfficeDebtToVehicleLabels: Record<
  UserLanguage,
  ISettlementOfficeDebtToVehicleLabel
> = {
  fa: {
    title: 'پرداخت وجه به وسیله نقلیه',
    amount: 'مبلغ',
    receiptNo: 'شماره فیش',
    description: 'توضیحات',
    date: 'تاریخ',
    time: 'ساعت',
    submit: 'ثبت پرداخت وجه',
    close: 'بستن',
  },
  en: {
    title: 'title',
    amount: 'amount',
    receiptNo: 'receiptNo',
    description: 'description',
    date: 'date',
    time: 'time',
    submit: 'submit',
    close: 'submit',
  },
};
