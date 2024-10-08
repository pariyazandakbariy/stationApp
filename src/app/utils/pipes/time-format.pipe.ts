import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    let hour = Math.floor(value / 60);
    let result = '';
    hour = value % 60 > 0 ? hour + 1 : hour;
    if (hour >= 24) {
      result = Number.parseInt(String(hour / 24)) + ' روز ';
      if (Number.parseInt(String(hour % 24)) != 0) {
        result = result + ', ' + Number.parseInt(String(hour % 24)) + ' ساعت ';
      }
    } else {
      result = hour + ' ساعت ';
    }
    return result;
  }
}
