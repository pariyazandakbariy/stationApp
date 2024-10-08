import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitGroup',
})
export class DigitGroupPipe implements PipeTransform {
  transform(el: string | number): string {
    return el.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
