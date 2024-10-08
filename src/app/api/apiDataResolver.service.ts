import { Injectable } from '@angular/core';
import { StateCS } from '../store/componentStore/stateCS';
import { CityCS } from '../store/componentStore/cityCS';
import { BaseInfoApiService } from './baseInfo-api.service';
import { VehicleTypeCS } from '../store/componentStore/vehicleTypeCS';
import { OfficeCS } from '../store/componentStore/officeCS';

@Injectable({
  providedIn: 'root',
})
export class ApiDataResolver {
  constructor(
    private stateCS: StateCS,
    private cityCS: CityCS,
    private officeCS: OfficeCS,
    private vehicleTypeCS: VehicleTypeCS,
    private baseInfoApi: BaseInfoApiService
  ) {}
  public async loadData() {
    await this.baseInfoApi.AllBaseInfo();
    await this.officeCS.doLoad();
    await this.stateCS.doLoad();
    await this.cityCS.doLoad();
    await this.vehicleTypeCS.doLoad();
    return '';
  }
}
