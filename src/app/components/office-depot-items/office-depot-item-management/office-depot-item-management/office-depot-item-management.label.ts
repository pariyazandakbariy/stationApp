import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IOfficeDepotItemManagement {
  deliveryService: string;
  aggregation: string;
  title: string;
  tableHeaderAggregateId: string;
  tableHeaderAggregateDestinationName: string;
  tableHeaderAggregateDestinationCity: string;
  tableHeaderAggregateWeight: string;
  tableHeaderLeftPayment: string;
  tableHeaderAction: string;
  total: string;
  destinationCity: string;
  destinationStation: string;
  button: string;
  disAggregateTitle: string;
  disAggregateDescription: string;
  disAggregateCancelBtn: string;
  disAggregateConfirmBtn: string;
  length: string;
  width: string;
  height: string;
  packageSize: string;
  ProductType: string;
  weight: string;
  packageType: string;
}

export const Labels: Record<UserLanguage, IOfficeDepotItemManagement> = {
  fa: {
    deliveryService: 'تحویل به سرویس',
    aggregation: 'تجمیع',
    title: 'مدیریت بار',
    tableHeaderAggregateId: 'ردیف',
    tableHeaderAggregateDestinationName: 'نام گیرنده',
    tableHeaderAggregateDestinationCity: 'شهر گیرنده',
    tableHeaderAggregateWeight: 'وزن',
    tableHeaderLeftPayment: 'پس کرایه',
    tableHeaderAction: 'حذف',
    total: 'مجموع',
    destinationCity: 'شهر مقصد',
    destinationStation: 'ایستگاه مقصد',
    button: 'تجمیع بارهای انتخاب شده',
    disAggregateTitle: 'تفکیک',
    disAggregateDescription: 'از تفکیک بسته اطمینان دارید ؟',
    disAggregateCancelBtn: 'بستن',
    disAggregateConfirmBtn: 'تفکیک',

    length: 'طول (cm)',
    width: ' عرض (cm)',
    height: 'ارتفاع(cm)',
    packageSize: 'اندازه بسته',
    ProductType: 'نوع کالا',
    weight: 'وزن (kg)',
    packageType: 'نوع بسته',
  },
  en: {
    deliveryService: 'Delivery service',
    aggregation: 'Aggregation',
    title: 'Cargo management',
    tableHeaderAggregateId: 'Id',
    tableHeaderAggregateDestinationName: 'Destination name',
    tableHeaderAggregateDestinationCity: 'Destination City',
    tableHeaderAggregateWeight: 'Weight',
    tableHeaderLeftPayment: 'Left payment',
    tableHeaderAction: 'Delete',
    total: 'total',
    destinationCity: 'Destination city',
    destinationStation: 'Destination station',
    button: 'Aggregation of selected loads',
    disAggregateTitle: 'Disaggregate',
    disAggregateDescription: 'are you shore you want disaggregate the box ?',
    disAggregateCancelBtn: 'cancel',
    disAggregateConfirmBtn: 'dissagregate',

    length: 'طول (cm)',
    width: ' عرض (cm)',
    height: 'ارتفاع(cm)',
    packageSize: 'اندازه بسته',
    ProductType: 'نوع کالا',
    weight: 'وزن (kg)',
    packageType: 'نوع بسته',
  },
};
