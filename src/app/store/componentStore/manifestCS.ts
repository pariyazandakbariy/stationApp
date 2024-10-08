import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { ManifestDS } from '../dataStore/mainfestDS';

@Injectable({
  providedIn: 'root',
})
export class ManifestCS {
  get itemsWatch() {
    return this.manifestDS.itemsWatch;
  }

  get items() {
    return this.manifestDS.items;
  }

  constructor(private manifestDS: ManifestDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.manifestDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  deleteAllItems() {
    this.manifestDS.deleteAllItems();
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      return await this.manifestDS.doLoad(true, {
        fromDate: data.fromDate,
        toDate: data.toDate,
      });
    } else {
      return this.items;
    }
  }
}
