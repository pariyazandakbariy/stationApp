import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-table-action-buttons-column',
  templateUrl: './core-table-action-buttons-column.component.html',
  styleUrls: ['./core-table-action-buttons-column.component.scss'],
})
export class CoreTableActionButtonsColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  clicked(key: string) {
    this.onClick.emit({ data: this.data, key: key });
  }

  checkFilter(column: any) {
    if (column.filter) {
      return column.filter(this.data);
    } else {
      return true;
    }
  }
}
