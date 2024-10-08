import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-network-error',
  templateUrl: './core-network-error.component.html',
  styleUrls: ['./core-network-error.component.scss'],
})
export class CoreNetworkErrorComponent {
  @Input() description: string = 'خطا در دریافت اطلاعات';
}
