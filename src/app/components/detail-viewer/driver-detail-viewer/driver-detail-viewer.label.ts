import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IDriverDetailViewer {
  headerTitle: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  gender: string;
  mobilePhone: string;
  edit: string;
  close: string;
  pleaseWait: string;
}

export const Labels: Record<UserLanguage, IDriverDetailViewer> = {
  fa: {
    headerTitle: 'اطلاعات راننده',
    firstName: 'نام : ',
    lastName: 'نام خانوادگی : ',
    nationalCode: 'کد ملی : ',
    gender: 'جنسیت : ',
    mobilePhone: 'شماره موبایل : ',
    edit: 'اعمال تغییرات',
    close: 'بستن',
    pleaseWait: 'لطفا صبر کنید...',
  },
  en: {
    headerTitle: 'Service information',
    firstName: 'First name',
    lastName: 'Last name',
    nationalCode: 'National code',
    gender: 'Gender',
    mobilePhone: 'Mobile phone',
    edit: 'Edit',
    close: 'Close',
    pleaseWait: 'please wait',
  },
};
