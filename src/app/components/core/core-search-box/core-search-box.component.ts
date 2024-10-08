import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'core-search-box',
  templateUrl: './core-search-box.component.html',
  styleUrls: ['./core-search-box.component.scss'],
})
export class CoreSearchBoxComponent {
  @Input() placeholder = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  value: string = '';
  change(event: any) {
    this.onChange.emit(event);
  }
}
