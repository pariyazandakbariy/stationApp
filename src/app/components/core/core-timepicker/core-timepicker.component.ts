import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import { TimepickerModalComponent } from './timepicker-modal/timepicker-modal.component';

@Component({
  selector: 'core-timepicker',
  templateUrl: './core-timepicker.component.html',
  styleUrls: ['./core-timepicker.component.scss'],
})
export class CoreTimepickerComponent {
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBlurEmit: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() canHighlightBackground = false;
  @Input() setCurrentTime = false;
  @Input() inputFormControl: FormControl = new FormControl('', []);
  selectedTime: string = '';
  @Input() set defaultValue(data: string) {
    this.selectedTime = data;
  }
  @Input() maxLength = 2000;
  constructor(private niraModalService: NiraModalService) {}

  ngOnInit(): void {
    this.inputFormControl.addValidators(Validators.minLength(5));
    if (this.setCurrentTime) {
      var currentTime = new Date();
      this.selectedTime =
        String(
          currentTime.getHours().toString().length > 1
            ? currentTime.getHours().toString()
            : '0' + currentTime.getHours().toString()
        ) +
        ':' +
        String(
          currentTime.getMinutes().toString().length > 1
            ? currentTime.getMinutes().toString()
            : '0' + currentTime.getMinutes().toString()
        );

      this.inputFormControl.setValue(this.selectedTime);
      this.onSelect.emit(this.selectedTime);
    }
  }

  showSelectTimeModal() {
    const modal = this.niraModalService.open(TimepickerModalComponent, {
      outsideClose: true,
      data: this.selectedTime,
    });
    modal.afterClosed.subscribe((time: any) => {
      if (time) {
        this.selectedTime = time;
        this.inputFormControl.setValue(this.selectedTime);
        this.onSelect.emit(time);
      }
    });
  }

  focusOut() {
    setTimeout(() => {
      this.inputFormControl.markAsTouched();
    }, 100);
  }

  change(event: any) {
    setTimeout(() => {
      let value = event.srcElement.value;
      value = value.replaceAll(':', '');
      if (isNaN(value)) {
        this.inputFormControl.setValue('');
      } else {
        const formatValue = value
          .toString()
          .replace(/\B(?=(\d{2})+(?!\d))/g, ':');
        console.log(formatValue);
        this.inputFormControl.setValue(formatValue);
      }
      if (!this.inputFormControl.errors) {
        this.onSelect.emit(this.inputFormControl.value);
      }
    }, 10);
  }
  onPaste(event: any) {
    setTimeout(() => {
      const value = event.srcElement.value;
      this.inputFormControl.markAsTouched();
      this.inputFormControl.setValue(value);
      this.onSelect.emit(value);
    }, 10);
  }
  onBlur() {
    this.onBlurEmit.emit(this.inputFormControl.value);
  }
  onKeyPress() {
    if (this.inputFormControl.value.toString().length > 4) {
      return false;
    } else {
      return true;
    }
  }
}
