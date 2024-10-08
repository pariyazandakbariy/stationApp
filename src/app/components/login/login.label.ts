export interface ILoginLabel {
  titleHeader: string;
  user: string;
  password: string;
  submit: string;
  requiredError: string;
  rememberMe: string;
  emptyField: string;
  minlength: string;
  maxlength: string;
  isNumber: string;
  isForgetPassword: string;
}

export const Labels: ILoginLabel = {
  titleHeader: 'ورود به حساب کاربری',
  user: 'نام کاربری ',
  password: 'کلمه عبور',
  submit: 'ورود',
  requiredError: 'این فیلد اجباری است',
  rememberMe: 'مرا بخاطر بسپار',
  emptyField: 'این فیلد خالی است',
  minlength: 'حداقل تعداد کارکتر',
  maxlength: 'حداکثر تعداد کارکتر',
  isNumber: 'عدد باشد.',
  isForgetPassword: 'رمز خود را فراموش کرده اید؟',
};
