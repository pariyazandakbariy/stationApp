import { Component, Input } from '@angular/core';
import { ColorState } from 'src/app/utils/types';

@Component({
  selector: 'core-spinner',
  templateUrl: './core-spinner.component.html',
  styleUrls: ['./core-spinner.component.scss']
})
export class CoreSpinnerComponent {
  
  @Input() size: number = 24;
  @Input() colorState: ColorState = 'default';
  @Input() type: 'circle' | 'line' = 'circle';

}
