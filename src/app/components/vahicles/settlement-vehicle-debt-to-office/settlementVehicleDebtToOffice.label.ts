import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISettlementVehicleDebtToOfficeLabel {
  title: string;
  amount: string;
  receiptNo: string;
  description: string;
  date: string;
  time: string;
  submit: string;
  close: string;
}

export const SettlementVehicleDebtToOfficeLabels: Record<
  UserLanguage,
  ISettlementVehicleDebtToOfficeLabel
> = {
  fa: {
    title: 'دریافت وجه از وسیله نقلیه',
    amount: 'مبلغ',
    receiptNo: 'شماره فیش',
    description: 'توضیحات',
    date: 'تاریخ',
    time: 'ساعت',
    submit: 'ثبت دریافت وجه',
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
