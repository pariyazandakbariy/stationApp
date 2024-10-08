import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import OfficeDM from '../dataModels/officeDM';
import { OfficeDS } from '../dataStore/officeDS';
import CityDM from '../dataModels/cityDM';

@Injectable({
  providedIn: 'root',
})
export class OfficeCS {
  get itemsWatch() {
    return this.officeDS.itemsWatch;
  }

  get items() {
    return this.officeDS.items;
  }

  constructor(private officeDS: OfficeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.officeDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async getOfficesByCityId(cityId: string) {
    return this.items.filter((office: OfficeDM) => office.city?.id === cityId);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.officeDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
