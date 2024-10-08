import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'core-checkbox',
  templateUrl: './core-checkbox.component.html',
  styleUrls: ['./core-checkbox.component.scss'],
})
export class CoreCheckboxComponent {
  @Input() label = '';
  @Input() name = '1';
  @Input() checked = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() inputFormControl: FormControl = new FormControl('', []);

  change(event: any) {
    this.onChange.emit(event);
  }
}
