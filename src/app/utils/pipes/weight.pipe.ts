import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
})
export class WeightPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return value + ' کیلوگرم ';
  }
}
