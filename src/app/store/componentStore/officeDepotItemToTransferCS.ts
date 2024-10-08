import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { BehaviorSubject } from 'rxjs';
import OfficeDepotItemDM from '../dataModels/officeDepotItemDM';
import { OfficeDepotItemToTransferDS } from '../dataStore/officeDepotItemToTransferDS';

@Injectable({
  providedIn: 'root',
})
export class OfficeDepotItemToTransferCS {
  selectedAggregationItems: BehaviorSubject<OfficeDepotItemDM[]> =
    new BehaviorSubject<OfficeDepotItemDM[]>([]);
  get itemsWatch() {
    return this.officeDepotItemDS.itemsWatch;
  }

  get items() {
    return this.officeDepotItemDS.items;
  }

  constructor(private officeDepotItemDS: OfficeDepotItemToTransferDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.officeDepotItemDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.officeDepotItemDS.doLoad(force);
    } else {
      return this.items;
    }
  }
}
