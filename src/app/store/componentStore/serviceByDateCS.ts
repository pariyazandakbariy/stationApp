import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import ServiceDM from '../dataModels/serviceDM';
import { ServiceByDateDS } from '../dataStore/serviceByDateDS';

@Injectable({
  providedIn: 'root',
})
export class ServiceByDateCS {
  get itemsWatch() {
    return this.serviceByDateDS.itemsWatch;
  }

  get items() {
    return this.serviceByDateDS.items;
  }

  constructor(private serviceByDateDS: ServiceByDateDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.serviceByDateDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  getCityById(id: number) {
    return this.items.find((service: ServiceDM) => service.serviceId === id);
  }

  deleteAllItems() {
    this.serviceByDateDS.deleteAllItems();
  }

  async ServicesListByOriginOfficeCodeAndDate(
    force: boolean = false,
    data: { originCityCode: string; fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      return await this.serviceByDateDS.ServicesListByOriginOfficeCodeAndDate(
        true,
        {
          originCityCode: data.originCityCode,
          fromDate: data.fromDate,
          toDate: data.toDate,
        }
      );
    } else {
      return this.items;
    }
  }
  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      return await this.serviceByDateDS.doLoad(true, {
        fromDate: data.fromDate,
        toDate: data.toDate,
      });
    } else {
      return this.items;
    }
  }
}
