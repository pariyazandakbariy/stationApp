import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import VehicleTypeDM from '../dataModels/vehicleTypeDM';
import { VehicleTypeApiService } from 'src/app/api/vehicleType-api.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleTypeDS extends BaseItemDS<VehicleTypeDM> {
  constructor(private vehicleTypeApi: VehicleTypeApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      const vehicleTypes = await this.vehicleTypeApi.VehicleTypeList();
      await this.addOrReplaceItems(vehicleTypes);
      return vehicleTypes;
    } else {
      return this.items;
    }
  }
}
