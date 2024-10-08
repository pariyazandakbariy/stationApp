import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { DriverCourierDS } from '../dataStore/driverCourierDS';

@Injectable({
  providedIn: 'root',
})
export class DriverCourierCS {
  get itemsWatch() {
    return this.driverCourierDS.itemsWatch;
  }

  get items() {
    return this.driverCourierDS.items;
  }

  constructor(private driverCourierDS: DriverCourierDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.driverCourierDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.driverCourierDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
