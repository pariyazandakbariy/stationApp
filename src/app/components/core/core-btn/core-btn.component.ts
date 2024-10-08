import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonType,
  ColorState,
  ThemePalette,
  ButtonSize,
  ConfirmDialog,
} from 'src/app/utils/types';
import { NiraModalService } from 'nira-modal';
import { CoreConfirmDialogComponent } from '../core-confirm-dialog/core-confirm-dialog.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'core-btn',
  templateUrl: './core-btn.component.html',
  styleUrls: ['./core-btn.component.scss'],
})
export class CoreBtnComponent {
  disable = false;

  @Input() formGroup: FormGroup | undefined = undefined;
  @Input() loading: boolean = false;
  @Input() theme: ThemePalette = 'square';
  @Input() buttonType: ButtonType = 'button';
  @Input() size: ButtonSize = 'small';
  @Input() set isDisabled(value: boolean) {
    this.disable = value;
  }
  @Input() colorState: ColorState = 'default';
  @Output() btnClicked: EventEmitter<any> = new EventEmitter();
  @Input() confirmDialog: ConfirmDialog | undefined;
  constructor(private niraModalService: NiraModalService) {}

  clicked() {
    if (!this.disable) {
      if (this.confirmDialog != undefined) {
        const modal = this.niraModalService.open(CoreConfirmDialogComponent, {
          data: this.confirmDialog,
        });
        modal.afterClosed.subscribe((result) => {
          if (result === 'true') {
            this.btnClicked.emit();
          }
        });
      } else {
        this.btnClicked.emit();
      }
    }
    if (this.formGroup) this.formGroup.markAllAsTouched();
  }
}
