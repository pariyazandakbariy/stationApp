import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import DriverDM from '../dataModels/driverDM';
import { DriverApiService } from 'src/app/api/driver-api.service';

@Injectable({
  providedIn: 'root',
})
export class DriverDS extends BaseItemDS<DriverDM> {
  constructor(private driverApi: DriverApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }
  async add(driver: DriverDM) {
    const data = await this.driverApi.add(driver);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(driver: DriverDM) {
    const data = await this.driverApi.edit(driver);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(driver: DriverDM) {
    await this.driverApi.delete(driver);
    this.removeItem(driver.driverId);
    return 'done';
  }

  async getDriverById(id: number) {
    const driver = await this.driverApi.DriverInformation(id);
    this.addOrReplaceItem(driver);
    return driver;
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      const drivers = await this.driverApi.DriverList();
      await this.addOrReplaceItems(drivers);
      return drivers;
    } else {
      return this.items;
    }
  }
}
