import { Component, Input } from '@angular/core';
import { WordifyFa } from 'src/app/utils/wordify';

@Component({
  selector: 'app-core-number',
  templateUrl: './core-number.component.html',
  styleUrls: ['./core-number.component.scss'],
})
export class CoreNumberComponent {
  @Input() number: number | string | undefined = '';
  @Input() type: 'number' | 'word' = 'number';
  @Input() canSplitNumbers = false;
  @Input() canShowWordInToolTip = false;
  @Input() canShowIRR = false;

  wordifyFa(number: string | number | undefined) {
    if (number === undefined) {
      return '';
    }
    if (this.type === 'number') {
      if (this.canSplitNumbers) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } else {
        return number;
      }
    } else {
      const newNumber = Number(number.toString().replaceAll(',', ''));
      if (newNumber > 10) {
        return WordifyFa(newNumber / 10) + ' تومان ';
      } else {
        return WordifyFa(number);
      }
    }
  }

  toolTipText(number: string | number | undefined) {
    if (this.number === undefined) return '';
    if (!this.canShowWordInToolTip) return '';
    if (number && +number > 10) {
      return WordifyFa(+number / 10) + ' تومان ';
    } else {
      return WordifyFa(number);
    }
  }
}
