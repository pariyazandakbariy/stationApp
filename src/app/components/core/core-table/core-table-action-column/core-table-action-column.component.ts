import { Component, Input } from '@angular/core';
import { NiraModalService } from 'nira-modal';

@Component({
  selector: 'app-core-table-action-column',
  templateUrl: './core-table-action-column.component.html',
  styleUrls: ['./core-table-action-column.component.scss'],
})
export class CoreTableActionColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  constructor(private niraModalService: NiraModalService) {}

  openDialog() {
    this.niraModalService.open(this.column.data.component, {
      data: this.data[this.column.data.key],
    });
  }
}
