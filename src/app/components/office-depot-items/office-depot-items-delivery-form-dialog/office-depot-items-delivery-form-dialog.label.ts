import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IOfficeDepotItemsDeliveryFormLabel {
  fullName: string;
  idNumber: string;
  chargeAmount: string;
  daysInWareHouse: string;
  courierAmount: string;
  wareHouseCostAmount: string;
  titleDialog: string;
  add: string;
  close: string;
  totalPrice:string;
  prePayment: string;
  leftPayment: string;
}

export const Labels: Record<UserLanguage, IOfficeDepotItemsDeliveryFormLabel> =
  {
    fa: {
      fullName: 'نام و نام خانوادگی',
      idNumber: 'شماره مدرک شناسایی',
      chargeAmount: 'مبلغ شارژ انبار',
      daysInWareHouse: 'روزهای در انبار',
      courierAmount: 'مبلغ پیک',
      wareHouseCostAmount: 'مقدار هزینه انبار',
      titleDialog: 'تحویل بار',
      add: 'تحویل شد',
      close: 'بستن',
      totalPrice: 'جمع کل : ',
      prePayment: 'پیش پرداخت : ',
      leftPayment: 'مبلغ باقیمانده : ',
    },
    en: {
      fullName: 'Name',
      idNumber: 'Type',
      chargeAmount: 'Channel',
      daysInWareHouse: 'Days in wareHouse',
      courierAmount: 'Courier amount',
      wareHouseCostAmount: 'WareHouse cost amount',
      titleDialog: 'addPrinter',
      add: 'add',
      close: 'close',
      totalPrice: 'Total price',
      prePayment: 'Pre payment',
      leftPayment: 'Left payment',
    },
  };
