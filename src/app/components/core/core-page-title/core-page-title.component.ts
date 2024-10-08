import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-page-title',
  templateUrl: './core-page-title.component.html',
  styleUrls: ['./core-page-title.component.scss'],
})
export class CorePageTitleComponent {
  @Input() title = '';
  @Input() description = '';
}
