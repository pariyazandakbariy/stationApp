import { Injectable } from '@angular/core';
import { CarrierDS } from '../dataStore/carrierDS';

@Injectable({
  providedIn: 'root',
})
export class CarrierCS {
  get itemsWatch() {
    return this.carrierDS.itemsWatch;
  }

  get items() {
    return this.carrierDS.items;
  }

  constructor(private carrierDS: CarrierDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.carrierDS.itemsWatch.subscribe((items) => {
      //
    });
  }
}
