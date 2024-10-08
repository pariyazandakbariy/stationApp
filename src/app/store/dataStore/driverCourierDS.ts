import { DriverCourierApiService } from 'src/app/api/driverCourier-api.service';
import { isEmpty } from '../../utils/object';
import DriverCourierDM from '../dataModels/driverCourierDM';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DriverCourierDS extends BaseItemDS<DriverCourierDM> {
  constructor(private driverCourierApiService: DriverCourierApiService) {
    super();
    this.onInitialization();
  }
  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      const driverCouriers =
        await this.driverCourierApiService.DriverCourierList();
      await this.addOrReplaceItems(driverCouriers);
      return driverCouriers;
    } else {
      return this.items;
    }
  }
}
