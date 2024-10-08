import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IVehicleDetailViewer {
  headerTitle: string;
  vehicleId: string;
  carrier: string;
  ownerFullName: string;
  ownerMobilePhone: string;
  register: string;
  vehicleType: string;
  pleaseWait: string;
  errorReceiveInformation: string;
}

export const Labels: Record<UserLanguage, IVehicleDetailViewer> = {
  fa: {
    headerTitle: 'اطلاعات وسیله نقلیه ',
    vehicleId: 'کد وسیله نقلیه',
    carrier: 'شرکت',
    ownerFullName: 'نام و نام خانوادگی',
    ownerMobilePhone: 'شماره همراه',
    register: 'پلاک خودرو',
    vehicleType: 'نوع وسیله نقلیه',
    pleaseWait: 'لطفا صبر کنید...',
    errorReceiveInformation: 'خطا در دریافت اطلاعات',
  },
  en: {
    headerTitle: 'Vehicle information',
    vehicleId: 'Vehicle ID',
    carrier: 'Carrier',
    ownerFullName: 'Full Name',
    ownerMobilePhone: 'Mobile Phon',
    register: 'Register',
    vehicleType: 'Vehicle Type',
    pleaseWait: 'Please Wait',
    errorReceiveInformation: 'Error in receiving information',
  },
};
