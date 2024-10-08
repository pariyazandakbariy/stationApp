import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import VehicleDM from '../dataModels/vehicleDM';
import { VehicleApiService } from 'src/app/api/vehicle-api.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleDS extends BaseItemDS<VehicleDM> {
  constructor(private vehicleApi: VehicleApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }
  async vehicleInformation(register: string) {
    const vehicles = await this.vehicleApi.VehicleInformation(register);
    await this.addOrReplaceItems(vehicles);
    return vehicles;
  }
  async vehicleById(vehicleId: number) {
    const vehicle = await this.vehicleApi.VehicleById(vehicleId);
    return vehicle;
  }

  async add(printer: VehicleDM) {
    const data = await this.vehicleApi.add(printer);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(printer: VehicleDM) {
    const data = await this.vehicleApi.edit(printer);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(vehicle: VehicleDM) {
    await this.vehicleApi.delete(vehicle);
    this.removeItem(+vehicle.vehicleId);
    return 'done';
  }
  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      const vehicles = await this.vehicleApi.VehicleList();
      await this.addOrReplaceItems(vehicles);
      return vehicles;
    } else {
      return this.items;
    }
  }
}
