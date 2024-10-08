import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { orderBy } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss'],
})
export class CoreTableComponent {
  @Input({ required: true }) columnsSchema: any;
  @Input({ required: true }) tableData: BehaviorSubject<any[]> =
    new BehaviorSubject<any[]>([]);
  @Input({ required: false }) responsive: boolean = true;
  @Input({ required: true }) loading: any;
  @Input({ required: false }) styleFilter: ((data: any) => string) | undefined;
  @Input({ required: false }) rowSelector: BehaviorSubject<any> | undefined =
    undefined;
  @Output() onColumnClicked: EventEmitter<any> = new EventEmitter();

  sortDetail: { key: string; sort: 'asc' | 'desc' } | undefined;
  sortedTableData: any[] = [];

  get columnsTypes() {
    return COLUMNS_TYPES;
  }
  get isRunningOnSmallScreen() {
    return Util.isRunningOnSmallScreen();
  }

  ngOnInit(): void {
    this.tableData.subscribe((val: any) => {
      this.sortedTableData = val;
    });
  }
  columnClicked(val: any) {
    this.onColumnClicked.emit(val);
  }
  sortByHeader(column: any) {
    if (this.sortDetail && this.sortDetail.key == column.key) {
      if (this.sortDetail.sort == 'desc') {
        this.sortDetail = { key: column.key, sort: 'asc' };
      } else {
        this.sortDetail = { key: column.key, sort: 'desc' };
      }
    } else {
      this.sortDetail = { key: column.key, sort: 'asc' };
    }
    if (
      column.type == COLUMNS_TYPES.TEXT ||
      column.type == COLUMNS_TYPES.NUMBER
    ) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [column.key],
        [this.sortDetail.sort]
      );
    } else if (column.type == COLUMNS_TYPES.SELECTOR) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [(c) => c[column.key][column.data.key]],
        [this.sortDetail.sort]
      );
    } else if (column.type == COLUMNS_TYPES.SHAMSI_DATE) {
      this.sortedTableData = orderBy(
        this.sortedTableData,
        [(c) => new Date(c[column.key]).getTime()],
        [this.sortDetail.sort]
      );
    }
  }
}
