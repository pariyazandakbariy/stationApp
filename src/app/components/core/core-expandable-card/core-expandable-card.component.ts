import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-expandable-card',
  templateUrl: './core-expandable-card.component.html',
  styleUrls: ['./core-expandable-card.component.scss'],
})
export class CoreExpandableCardComponent {
  @Input() headerTitle: string = '';
  @Input() isCardOpen: boolean = false;
}
