import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IBookingLabel {
  headerTitle: string;
  getOrigin: string;
  getDestination: string;
  packageType: string;
  length: string;
  width: string;
  height: string;
  address: string;
  packageSize: string;
  ProductType: string;
  count: string;
  weight: string;
  addPackage: string;
  originCountryState: string;
  originCity: string;
  destinationCountryState: string;
  destinationCity: string;
  hasPackaging: string;
  PriceDescription: string;
  continue: string;
  confirmBtn: string;
  senderInfo: string;
  receiverInfo: string;
  nameInputLabel: string;
  mobileInputLabel: string;
  addressInputLabel: string;
  buildingNumberInputLabel: string;
  unitNumberInputLabel: string;
  postalCodeInputLabel: string;
  continueButton: string;
  station: string;
  packageInfo: string;
  senderReceiverInfo: string;
  distanceFromTerminal: string;
  dialogTitle: string;
  selectedPrint: string;
  marketerCommissionAmount: string;
  packingFeeAmount: string;
  unknownCourierAmount: string;
  insuranceAmount: string;
  financialInfo: string;
  nationalCode: string;
}

export const Labels: Record<UserLanguage, IBookingLabel> = {
  fa: {
    headerTitle: 'ثبت درخواست',
    getDestination: 'نحوه دریافت مقصد',
    getOrigin: 'نحوه تحوبل در مبدا',
    packageType: 'نوع بسته',
    length: 'طول (cm)',
    width: ' عرض (cm)',
    height: 'ارتفاع(cm)',
    address: 'آدرس',
    packageSize: 'اندازه بسته',
    ProductType: 'نوع کالا',
    count: 'تعداد',
    weight: 'وزن (kg)',
    addPackage: 'افزودن بسته',
    originCountryState: 'استان مبدا',
    originCity: 'شهر مبدا',
    destinationCountryState: 'استان مقصد',
    destinationCity: 'شهر مقصد',
    hasPackaging: 'بسته بندی دارد',
    PriceDescription: 'قیمت فوق بدون احتساب مالیات و ارزش افزوده می باشد.',
    continue: 'ادامه',
    confirmBtn: 'تایید',
    senderReceiverInfo: 'اطلاعات مبدا و مقصد',
    packageInfo: 'اطلاعات مرسوله',
    senderInfo: 'اطلاعات فرستنده',
    receiverInfo: 'اطلاعات گیرنده',
    nameInputLabel: 'نام و نام خانوادگی  ',
    mobileInputLabel: 'شماره همراه ',
    addressInputLabel: 'آدرس ',
    postalCodeInputLabel: 'کد پستی  ',
    buildingNumberInputLabel: 'پلاک ',
    unitNumberInputLabel: 'واحد ',
    continueButton: 'ثبت بار',
    station: 'تحویل به',
    distanceFromTerminal: 'فاصله شمااز ',
    dialogTitle: 'انتخاب مسیر',
    selectedPrint: 'انتخاب پرینتر',
    marketerCommissionAmount: 'خدمات مازاد',
    packingFeeAmount: 'بسته بندی',
    unknownCourierAmount: 'خدمات شهری ',
    insuranceAmount: 'بیمه ',
    financialInfo: 'اطلاعات مالی',
    nationalCode: 'کد ملی',
  },
  en: {
    headerTitle: 'Request registration',
    getDestination: 'How to get the destination',
    getOrigin: 'How to get the origin',
    packageType: 'package type',
    length: 'length',
    width: 'width',
    height: 'Height',
    address: 'Address',
    packageSize: 'package size',
    ProductType: 'Product Type',
    count: 'count',
    weight: 'weight',
    addPackage: 'Add package',
    originCountryState: 'Origin province',
    originCity: 'Origin city',
    destinationCountryState: 'Destination province',
    destinationCity: 'Destination city',
    hasPackaging: 'It has packaging',
    PriceDescription: 'The above price does not include taxes and value added.',
    continue: 'continue',
    confirmBtn: 'Confirm',
    senderInfo: 'Sender info',
    packageInfo: 'Package info',
    senderReceiverInfo: 'Sender Receiver info',
    receiverInfo: 'Receiver info',
    nameInputLabel: 'Name and surname of the sender',
    mobileInputLabel: 'Mobile number',
    addressInputLabel: ' address',
    postalCodeInputLabel: 'Postal code of the sender',
    buildingNumberInputLabel: 'building number',
    unitNumberInputLabel: 'unit number',
    continueButton: 'Continue',
    station: 'Sender to terminal',
    distanceFromTerminal: 'Your distance from terminal',
    dialogTitle: 'select route',
    selectedPrint: 'Selected Print',
    marketerCommissionAmount: 'Marketer Commission Amount',
    packingFeeAmount: 'Packing Fee Amount',
    unknownCourierAmount: 'Unknown Courier Amount',
    insuranceAmount: 'Insurance Amount',
    financialInfo: 'financial Info',
    nationalCode: 'nationalCode',
  },
};
