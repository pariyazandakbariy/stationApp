import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityDS } from '../dataStore/cityDS';
import { OutgoingServicesDS } from '../dataStore/outgoingServicesDS';

@Injectable({
  providedIn: 'root',
})
export class OutgoingServiceCS {
  get itemsWatch() {
    return this.outgoingServicesDS.itemsWatch;
  }

  get items() {
    return this.outgoingServicesDS.items;
  }

  constructor(private outgoingServicesDS: OutgoingServicesDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.outgoingServicesDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.outgoingServicesDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
