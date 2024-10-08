import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';

type Location = {
  left: string;
  top: string;
  text: string;
  value: string;
};
@Component({
  selector: 'app-timepicker-modal',
  templateUrl: './timepicker-modal.component.html',
  styleUrls: ['./timepicker-modal.component.scss'],
})
export class TimepickerModalComponent implements IModal {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  hoursSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>(
    []
  );
  hours2Subject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>(
    []
  );
  minutesSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>(
    []
  );
  showHour: boolean = true;
  showMin: boolean = false;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const defaultTime = this.config.data;
    let topElement = document
      .getElementsByClassName('timepicker')[0]
      .getElementsByClassName('top')[0];
    if (defaultTime) {
      const items = defaultTime.split(':');
      topElement.getElementsByClassName('h')[0].innerHTML = items[0];
      topElement.getElementsByClassName('m')[0].innerHTML = items[1];
    } else {
      var currentTime = new Date();

      if (topElement.getElementsByClassName('h').length > 0)
        document.getElementsByClassName('h')[0].innerHTML = String(
          currentTime.getHours().toString().length > 1
            ? currentTime.getHours().toString()
            : '0' + currentTime.getHours().toString()
        );
      if (topElement.getElementsByClassName('m').length > 0)
        document.getElementsByClassName('m')[0].innerHTML = String(
          currentTime.getMinutes().toString().length > 1
            ? currentTime.getMinutes().toString()
            : '0' + currentTime.getMinutes().toString()
        );
    }

    this.selectHours();
  }
  close() {
    this.closeSubject.next('');
  }
  submit() {
    let topElement = document
      .getElementsByClassName('timepicker')[0]
      .getElementsByClassName('top')[0];
    const h = topElement.getElementsByClassName('h');
    const m = topElement.getElementsByClassName('m');
    let selectedTime;
    if (h.length > 0 && m.length > 0) {
      selectedTime = h[0].textContent + ':' + m[0].textContent;
    }
    this.closeSubject.next(selectedTime);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onHourClick() {
    this.selectHours();
  }

  onMinutesClick() {
    this.selectMinutes();
  }

  createCircleOfDivs(
    num: any,
    radius: number,
    offsetX: number,
    offsetY: number,
    add: number,
    teilbar: number
  ) {
    let x, y;
    let items: Location[] = [];
    for (let n = 0; n < num; n++) {
      let item: Location = {} as Location;
      x = radius * Math.cos((n / num) * 2 * Math.PI);
      y = radius * Math.sin((n / num) * 2 * Math.PI);
      if (teilbar == 1) {
        if (n + 3 > 12) {
          item.text = String(n + 3 - 12 + add);
        } else {
          if (n + 3 + add == 24) {
            item.text = '0';
          } else {
            item.text = String(n + 3 + add);
          }
        }
      } else {
        if (n % teilbar == 0) {
          if (n + 15 >= 60) {
            item.value = String(n + 15 - 60);
            item.text = String(n + 15 - 60 + add);
          } else {
            item.value = String(n + 15);
            item.text = String(n + 15 + add);
          }
        } else {
          if (n + 15 >= 60) {
            item.value = String(n + 15 - 60);
            item.text = '⋅';
          } else {
            item.value = String(n + 15);
            item.text = '\u00B7';
          }
        }
      }

      item.left = x + offsetX + 'px';
      item.top = y + offsetY + 'px';

      items.push(item);
    }
    return items;
  }

  onHourSelect(item: Location) {
    let topElement = document
      .getElementsByClassName('timepicker')[0]
      .getElementsByClassName('top')[0];
    if (topElement.getElementsByClassName('h').length > 0)
      document.getElementsByClassName('h')[0].innerHTML = String(
        item.text.length > 1 ? item.text : '0' + item.text
      );
    this.selectMinutes();
  }

  onMinutesSelect(item: Location) {
    let topElement = document
      .getElementsByClassName('timepicker')[0]
      .getElementsByClassName('top')[0];
    if (topElement.getElementsByClassName('m').length > 0)
      document.getElementsByClassName('m')[0].innerHTML = String(
        item.value.length > 1 ? item.value : '0' + item.value
      );
  }

  selectHours() {
    this.showHour = true;
    this.showMin = false;
    this.hoursSubject.next(this.createCircleOfDivs(12, 101, 105, 105, 0, 1));
    this.hours2Subject.next(this.createCircleOfDivs(12, 64, 110, 110, 12, 1));
  }

  selectMinutes() {
    this.showHour = false;
    this.showMin = true;
    this.minutesSubject.next(this.createCircleOfDivs(60, 101, 115, 115, 0, 5));
  }
}
