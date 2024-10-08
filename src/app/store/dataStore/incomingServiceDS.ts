import { OfficeApiService } from 'src/app/api/office-api.service';
import OfficeDM from '../dataModels/officeDM';
import { isEmpty } from '../../utils/object';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';
import { ServiceApiService } from 'src/app/api/service-api.service';
import ServiceCargoDM from '../dataModels/serviceCargoDM';

@Injectable({
  providedIn: 'root',
})
export class IncomingServiceDS extends BaseItemDS<ServiceCargoDM> {
  constructor(private serviceApiService: ServiceApiService) {
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
      const incomingItems = await this.serviceApiService.IncomingItems();
      this.deleteAllItems();
      await this.addOrReplaceItems(incomingItems);
      return incomingItems;
    } else {
      return this.items;
    }
  }
}
