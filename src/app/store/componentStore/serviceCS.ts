import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import ServiceDM from '../dataModels/serviceDM';
import { ServiceByDateDS } from '../dataStore/serviceByDateDS';
import { ServiceDS } from '../dataStore/serviceDS';

@Injectable({
  providedIn: 'root',
})
export class ServiceCS {
  get itemsWatch() {
    return this.serviceDS.itemsWatch;
  }

  get items() {
    return this.serviceDS.items;
  }

  constructor(private serviceDS: ServiceDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.serviceDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.serviceDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
