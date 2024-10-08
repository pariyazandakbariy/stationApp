import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { VehicleDS } from '../dataStore/vehicleDS';
import VehicleDM from '../dataModels/vehicleDM';

@Injectable({
  providedIn: 'root',
})
export class VehicleCS {
  get itemsWatch() {
    return this.vehicleDS.itemsWatch;
  }

  get items() {
    return this.vehicleDS.items;
  }

  constructor(private vehicleDS: VehicleDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.vehicleDS.itemsWatch.subscribe((items) => {
      //
    });
  }
  async vehicleInformation(register: string) {
    return this.vehicleDS.vehicleInformation(register);
  }

  async vehicleById(vehicleId: number) {
    return this.vehicleDS.vehicleById(vehicleId);
  }

  async add(vehicle: VehicleDM) {
    return await this.vehicleDS.add(vehicle);
  }

  async edit(vehicle: VehicleDM) {
    return await this.vehicleDS.edit(vehicle);
  }

  async delete(vehicle: VehicleDM) {
    return await this.vehicleDS.delete(vehicle);
  }
  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.vehicleDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
