import { isEmpty } from '../../utils/object';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';
import { ServiceApiService } from 'src/app/api/service-api.service';
import ServiceCargoDM from '../dataModels/serviceCargoDM';

@Injectable({
  providedIn: 'root',
})
export class OutgoingServicesDS extends BaseItemDS<ServiceCargoDM> {
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
      const outgoingItems = await this.serviceApiService.OutgoingItems();
      this.deleteAllItems();
      await this.addOrReplaceItems(outgoingItems);
      return outgoingItems;
    } else {
      return this.items;
    }
  }
}
