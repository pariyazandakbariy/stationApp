import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Letters } from 'src/app/utils/constants';

@Component({
  selector: 'core-pelak',
  templateUrl: './core-pelak.component.html',
  styleUrls: ['./core-pelak.component.scss'],
})
export class CorePelakComponent {
  letters: BehaviorSubject<any> = new BehaviorSubject<any>(Letters);
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Input() isDisable: boolean = false;
  @Input() canHighlightBackground = false;

  defaultValueLetter = '';

  myForm: FormGroup = new FormGroup({
    formControlColumnOne: new FormControl('', []),
    formControlColumnTwo: new FormControl('', []),
    formControlColumnThree: new FormControl('', []),
    formControlColumnLetter: new FormControl('', []),
  });

  @Input() defaultValue: string = '';
  @Input() set selectedItem(value: any) {
    if (value) {
      this.defaultValueLetter = value.columnTwo;
      this.myForm.setValue({
        formControlColumnOne: value.columnFour,
        formControlColumnTwo: value.columnThree,
        formControlColumnThree: value.columnOne,
        formControlColumnLetter: value.columnTwo,
      });
      this.inputFormControl.setValue(value);
    }
  }
  @Input() inputFormControl: FormControl = new FormControl('', []);
  columnOne = '';
  columnTwo = '';
  columnThree = '';
  columnLetter = '';

  ngOnInit(): void {
    if (this.defaultValue) {
      const items = this.defaultValue.split('-');
      this.defaultValueLetter = items[1];
      this.columnOne = items[3];
      this.columnTwo = items[2];
      this.columnThree = items[0];
      this.columnLetter = items[1];
      this.myForm.setValue({
        formControlColumnOne: items[3],
        formControlColumnTwo: items[2],
        formControlColumnThree: items[0],
        formControlColumnLetter: items[1],
      });
      this.inputFormControl.setValue(this.defaultValue);
    }
  }
  column1(event: string) {
    this.columnOne = event;
    this.convertPelak();
  }
  column2(event: string) {
    this.columnTwo = event;
    this.convertPelak();
  }
  column3(event: string) {
    this.columnThree = event;
    this.convertPelak();
  }
  onLetterSelect(event: any) {
    this.columnLetter = event;
    this.convertPelak();
  }
  completeColumn(value: string, length: number) {
    let out = value;
    const valueLength = value.length;
    if (valueLength > length) return value;
    for (let index = 0; index < length - valueLength; index++) {
      out = out + '_';
    }
    return out;
  }

  convertPelak() {
    const value =
      this.completeColumn(this.columnOne, 2) +
      '-' +
      this.completeColumn(this.columnLetter, 1) +
      '-' +
      this.completeColumn(this.columnTwo, 3) +
      '-' +
      this.completeColumn(this.columnThree, 2) +
      '-IR';
    this.inputFormControl.setValue(value);
    this.onChange.emit(value);
  }
}
