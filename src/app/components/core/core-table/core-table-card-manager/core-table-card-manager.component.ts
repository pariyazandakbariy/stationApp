import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs';
import { COLUMNS_TYPES } from 'src/app/utils/constants';

@Component({
  selector: 'app-core-table-card-manager',
  templateUrl: './core-table-card-manager.component.html',
  styleUrls: ['./core-table-card-manager.component.scss'],
})
export class CoreTableCardManagerComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;
  @Output() onColumnClicked: EventEmitter<any> = new EventEmitter();

  get columnsTypes() {
    return COLUMNS_TYPES;
  }
  constructor(private niraSnackBar: NiraSnackBarService) {}

  getSelectorData(data: any, key: string) {
    const split = key.split('.');
    if (split.length === 1) {
      return data[key];
    } else {
      let newData = data;
      split.forEach((newKay) => {
        newData = newData[newKay];
      });

      return newData;
    }
  }

  onTextColumnClicked(column: any, data: string) {
    if (!column.copyToClipboard) return;
    navigator.clipboard
      .writeText(data)
      .then((e) => {
        this.niraSnackBar.show('با موفقیت کپی شد', {
          statusClass: 'success',
          duration: 3000,
        });
      })
      .catch((e) => console.error(e));
  }

  clicked(val: any) {
    this.onColumnClicked.emit(val);
  }
}
