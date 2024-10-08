import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'core-textarea',
  templateUrl: './core-textarea.component.html',
  styleUrls: ['./core-textarea.component.scss'],
})
export class CoreTextareaComponent {
  @Input() textareaFormControl: FormControl = new FormControl('', []);
  @Input() maxLength = 2000;
  @Input() set model(value: string | null) {
    if (value) {
      this.textareaFormControl.setValue(value);
    }
  }
  @Input() set disable(value: boolean) {
    if (value) {
      this.textareaFormControl.disable();
    } else {
      this.textareaFormControl.enable();
    }
  }
  @Input() placeholder = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  change() {
    if (!this.textareaFormControl.errors) {
      this.onChange.emit(this.textareaFormControl.value);
    }
  }

  onKeyPress() {
    if (this.textareaFormControl.value.toString().length > this.maxLength) {
      return false;
    } else {
      return true;
    }
  }
}
