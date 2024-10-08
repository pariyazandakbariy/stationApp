import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'core-date-picker',
  templateUrl: './core-date-picker.component.html',
  styleUrls: ['./core-date-picker.component.scss'],
})
export class CoreDatePickerComponent implements OnInit {
  _inputFormControl = new FormControl('', []);

  @Input() canSelectToday: boolean = false;
  @Input() defaultDate: string = '';
  @Input() label: string = '';

  @Input() set inputFormControl(value: FormControl) {
    this._inputFormControl = value;
  }

  isOpenCalendar: boolean = false;
  date: string = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  onDatePickerResult(result: string) {
    this._inputFormControl.setValue(result);
    this.date = result;
  }
  onTodayDate(todayDate: string) {
    this.date = todayDate;
    this._inputFormControl.setValue(todayDate);
  }
}
