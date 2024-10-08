import { Pipe, PipeTransform } from '@angular/core';

// type Currency = 'RII' | 'T';
@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(
    value: string | number | undefined,
    currency: string,
    ...args: unknown[]
  ): string {
    if (currency == 'IRR') {
      value = value + ' ریال ';
    } else {
      value = value + ' تومان ';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
