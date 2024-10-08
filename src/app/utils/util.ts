import moment from 'jalali-moment';
type DateFormat = 'HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm';
type ShamsiDateFormat = 'HH:mm' | 'jYYYY/jMM/jDD' | 'jYYYY/jMM/jDD HH:mm';

export class Util {
  public static getMoneyFormat(data: string) {
    return ('' + data).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  public static isRunningOnSmallScreen(): boolean {
    return window.innerWidth < 772;
  }

  public static isRunningOnMobile(): boolean {
    return !this.isRunningOnWindows;
  }

  public static isRunningOnWindows(): boolean {
    return navigator.platform.startsWith('Win');
  }

  public static getRunningPlatform(): string {
    return navigator.platform;
  }

  public static getTotalFromArray(array: [], name: string): number {
    return array.map((item) => +item[name]).reduce((prev, next) => prev + next);
  }

  public static shamsiToMiladi(value: string, format: DateFormat) {
    const m = moment(value, 'jYYYY-jMM-jDD HH:mm');
    return m.format(format);
  }
  public static miladiToShamsi(value: string, format: ShamsiDateFormat) {
    const m = moment(value, 'YYYY-MM-DD HH:mm');
    return m.format(format);
  }
}
