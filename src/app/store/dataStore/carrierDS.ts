import { Injectable } from '@angular/core';
import CarrierDM from '../dataModels/carrierDM';
import BaseItemDS from './base/baseItemDS';

@Injectable({
  providedIn: 'root',
})
export class CarrierDS extends BaseItemDS<CarrierDM> {
  constructor() {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  doLoad(force: boolean): void {
    throw new Error('Method not implemented.');
  }
}
