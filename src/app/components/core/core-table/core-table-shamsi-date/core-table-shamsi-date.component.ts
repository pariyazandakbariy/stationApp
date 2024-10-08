import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COLUMNS_TYPES } from 'src/app/utils/constants';

@Component({
  selector: 'app-core-table-shamsi-date',
  templateUrl: './core-table-shamsi-date.component.html',
  styleUrls: ['./core-table-shamsi-date.component.scss'],
})
export class CoreTableShamsiDateComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  get columnsTypes() {
    return COLUMNS_TYPES;
  }
}
