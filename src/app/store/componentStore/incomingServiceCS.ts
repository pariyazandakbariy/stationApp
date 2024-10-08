import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityDS } from '../dataStore/cityDS';
import { IncomingServiceDS } from '../dataStore/incomingServiceDS';

@Injectable({
  providedIn: 'root',
})
export class IncomingServiceCS {
  get itemsWatch() {
    return this.incomingServiceDS.itemsWatch;
  }

  get items() {
    return this.incomingServiceDS.items;
  }

  constructor(private incomingServiceDS: IncomingServiceDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.incomingServiceDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.incomingServiceDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
