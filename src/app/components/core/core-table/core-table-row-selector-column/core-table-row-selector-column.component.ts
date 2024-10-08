import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-core-table-row-selector-column',
  templateUrl: './core-table-row-selector-column.component.html',
  styleUrls: ['./core-table-row-selector-column.component.scss'],
})
export class CoreTableRowSelectorColumnComponent {
  checked = false;
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;

  ngOnInit() {
    this.rowSelector?.subscribe((data: any[]) => {
      const index = data.findIndex((item) => item.id === this.data.id);
      this.checked = index >= 0;
    });
  }

  change(event: any) {
    let rowSelector: any[] = this.rowSelector?.getValue();
    if (event.srcElement.checked) {
      rowSelector = [...rowSelector, this.data];
    } else {
      const index = rowSelector.findIndex((item) => this.data.id === item.id);
      rowSelector.splice(index, 1);
    }
    this.rowSelector?.next(rowSelector);
  }
}
