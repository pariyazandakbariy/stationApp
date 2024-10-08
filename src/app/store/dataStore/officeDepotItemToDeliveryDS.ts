import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import OfficeDepotItemDM from '../dataModels/officeDepotItemDM';
import { OfficeDepotItemApiService } from 'src/app/api/officeDepotItem-api.service';

@Injectable({
  providedIn: 'root',
})
export class OfficeDepotItemToDeliveryDS extends BaseItemDS<OfficeDepotItemDM> {
  constructor(private officeDepotItemApi: OfficeDepotItemApiService) {
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
      this.deleteAllItems();
      const officeDepotItems =
        await this.officeDepotItemApi.OfficeDepotItemToDeliveryList();
      await this.addOrReplaceItems(officeDepotItems);
      return officeDepotItems;
    } else {
      return this.items;
    }
  }
}
