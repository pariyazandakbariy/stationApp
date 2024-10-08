import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { ConfirmDialog } from 'src/app/utils/types';

@Component({
  selector: 'app-core-confirm-dialog',
  templateUrl: './core-confirm-dialog.component.html',
  styleUrls: ['./core-confirm-dialog.component.scss'],
})
export class CoreConfirmDialogComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  confirmDialog!: ConfirmDialog;
  async ngOnInit() {
    this.confirmDialog = {
      cancelBtn: this.config.data.cancelBtn,
      confirmBtn: this.config.data.confirmBtn,
      text: this.config.data.text,
      title: this.config.data.title,
      color: this.config.data.color,
    };
  }
  close() {
    this.closeSubject.next('false');
  }
  confirm() {
    this.closeSubject.next('true');
  }
}
