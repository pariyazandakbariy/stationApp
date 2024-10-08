import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputType } from 'src/app/utils/types';
@Component({
  selector: 'core-input',
  templateUrl: './core-input.component.html',
  styleUrls: ['./core-input.component.scss'],
})
export class CoreInputComponent {
  inputType!: InputType;
  isDisable = false;
  @Input() canShowWordifyFa = false;
  @Input() canSplitNumber = false;
  @Input() canHighlightBackground = false;
  @Input() maxLength = 2000;
  @Input() set type(value: InputType) {
    this.inputType = value;
  }
  @Input() set disable(value: boolean) {
    this.isDisable = value;
    if (value) {
      this.inputFormControl.disable();
    } else {
      this.inputFormControl.enable();
    }
  }
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Input() placeholder = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Output() onBlurEmit: EventEmitter<string> = new EventEmitter();

  change(event: any) {
    this.formatPrice(event.srcElement.value);
  }

  onPaste(event: any) {
    setTimeout(() => {
      const value = event.srcElement.value;
      this.inputFormControl.markAsTouched();
      this.inputFormControl.setValue(value);
      if (this.inputType === 'number' && this.canSplitNumber) {
        this.onChange.emit(value.replaceAll(',', ''));
      } else {
        if (!this.inputFormControl.errors) {
          this.onChange.emit(value);
        }
      }
    }, 10);
  }

  onBlur() {
    if (this.inputType === 'number' && this.canSplitNumber) {
      this.onChange.emit(this.inputFormControl.value.replaceAll(',', ''));
    } else {
      if (!this.inputFormControl.errors) {
        this.onChange.emit(this.inputFormControl.value);
      }
    }
    this.onBlurEmit.emit(this.inputFormControl.value);
    console.log(this.inputFormControl);
  }

  onKeyPress() {
    if (this.inputFormControl.value.toString().length == this.maxLength) {
      return false;
    } else {
      return true;
    }
  }

  formatPrice(event: any) {
    if (this.inputType === 'number' && this.canSplitNumber) {
      setTimeout(() => {
        let value = event;
        value = Number(value.replaceAll(',', ''));
        if (isNaN(value)) {
          this.inputFormControl.setValue('');
        } else {
          const formatValue = value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          this.inputFormControl.setValue(formatValue);
        }
        if (!this.inputFormControl.errors) {
          this.onChange.emit(this.inputFormControl.value.replaceAll(',', ''));
        }
      }, 10);
    } else {
      if (!this.inputFormControl.errors) {
        this.onChange.emit(this.inputFormControl.value);
      }
    }
  }
}
