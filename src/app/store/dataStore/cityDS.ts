import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityApiService } from 'src/app/api/city-api.service';

@Injectable({
  providedIn: 'root',
})
export class CityDS extends BaseItemDS<CityDM> {
  constructor(private cityApi: CityApiService) {
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
      const cities = await this.cityApi.CityList();
      await this.addOrReplaceItems(cities);
      return cities;
    } else {
      return this.items;
    }
  }
}
