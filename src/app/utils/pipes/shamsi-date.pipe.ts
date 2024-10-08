import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
type Format = 'HH:mm' | 'jYYYY/jMM/jDD' | 'jYYYY/jMM/jDD HH:mm';
@Pipe({
  name: 'shamsiDate',
})
export class ShamsiDatePipe implements PipeTransform {
  transform(
    value: string | undefined,
    format: Format,
    ...args: unknown[]
  ): string {
    if (!value) return '';
    const m = moment(
      value,
      value.length === 10
        ? 'YYYY-MM-DD'
        : value.length === 16
        ? 'YYYY-MM-DD HH:mm'
        : 'YYYY-MM-DD HH:mm:ss'
    );
    return m.format(format);
  }
}
