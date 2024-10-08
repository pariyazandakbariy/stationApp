import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import DriverDM from '../dataModels/driverDM';
import { DriverDS } from '../dataStore/driverDS';

@Injectable({
  providedIn: 'root',
})
export class DriverCS {
  get itemsWatch() {
    return this.driverDS.itemsWatch;
  }

  get items() {
    return this.driverDS.items;
  }

  constructor(private driverDS: DriverDS) {
    this.onInitialization();
  }
  async onInitialization() {
    this.driverDS.itemsWatch.subscribe((items) => {
      //
    });
  }
  async add(driver: DriverDM) {
    return await this.driverDS.add(driver);
  }

  async edit(driver: DriverDM) {
    return await this.driverDS.edit(driver);
  }

  async delete(driver: DriverDM) {
    return await this.driverDS.delete(driver);
  }

  async getDriverById(id: number) {
    return await this.driverDS.getDriverById(id);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.driverDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
