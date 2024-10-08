import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IStationForm {
  destinationStation: string;
  destinationCity: string;
  tableHeaderCityNameFa: string;
  stationId: string;
  stationNameFa: string;
  arrivalTime: string;
  addStation: string;
  add: string;
  close: string;
}

export const Labels: Record<UserLanguage, IStationForm> = {
  fa: {
    destinationStation: 'ایستگاه مقصد',
    destinationCity: 'شهر مقصد',
    tableHeaderCityNameFa: 'ایستگاه',
    stationId: 'کد',
    stationNameFa: 'نام ایستگاه',
    arrivalTime: 'ساعت رسیدن  ',
    addStation: 'افزودن ایستگاه',
    add: 'افزودن  ',
    close: 'بستن',
  },
  en: {
    destinationStation: 'City',
    destinationCity: 'City',
    tableHeaderCityNameFa: 'City',
    stationId: 'Door Service',
    stationNameFa: 'Show',
    add: 'add',
    arrivalTime: 'edit city',
    addStation: 'add city',
    close: 'close',
  },
};
