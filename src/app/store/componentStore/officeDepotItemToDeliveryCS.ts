import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { BehaviorSubject } from 'rxjs';
import OfficeDepotItemDM from '../dataModels/officeDepotItemDM';
import { OfficeDepotItemToDeliveryDS } from '../dataStore/officeDepotItemToDeliveryDS';

@Injectable({
  providedIn: 'root',
})
export class OfficeDepotItemToDeliveryCS {
  get itemsWatch() {
    return this.officeDepotItemDS.itemsWatch;
  }

  get items() {
    return this.officeDepotItemDS.items;
  }

  constructor(private officeDepotItemDS: OfficeDepotItemToDeliveryDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.officeDepotItemDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  getCityById(id: string) {
    return this.items.find((cargo: OfficeDepotItemDM) => cargo.billCode === id);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.officeDepotItemDS.doLoad(force);
    } else {
      return this.items;
    }
  }
}
