import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { VehicleTypeDS } from '../dataStore/vehicleTypeDS';
import VehicleTypeDM from '../dataModels/vehicleTypeDM';

@Injectable({
  providedIn: 'root',
})
export class VehicleTypeCS {
  get itemsWatch() {
    return this.vehicleTypeDS.itemsWatch;
  }

  get items() {
    return this.vehicleTypeDS.items;
  }

  constructor(private vehicleTypeDS: VehicleTypeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.vehicleTypeDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.vehicleTypeDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
