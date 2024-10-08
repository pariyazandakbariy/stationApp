import { Injectable } from '@angular/core';
import { TraditionalManifestApiService } from 'src/app/api/traditionalManifest-api.service';
import { isEmpty } from '../../utils/object';
import TraditionalManifestDM from '../dataModels/traditionalManifestDM';
import { TraditionalManifestDS } from '../dataStore/traditionalManifestDS';

@Injectable({
  providedIn: 'root',
})
export class TraditionalManifestCS {
  get itemsWatch() {
    return this.traditionalManifestDS.itemsWatch;
  }

  get items() {
    return this.traditionalManifestDS.items;
  }

  constructor(
    private traditionalManifestDS: TraditionalManifestDS,
    private traditionalManifestApi: TraditionalManifestApiService
  ) {
    this.onInitialization();
  }

  async onInitialization() {
    this.traditionalManifestDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  getTraditionalManifestById(id: number) {
    return this.traditionalManifestApi.getTraditionalManifestById(id);
  }
  processTraditionalManifest(id: number) {
    return this.traditionalManifestApi.ProcessTraditionalManifest(id);
  }
  VoidTraditionalManifest(id: number) {
    return this.traditionalManifestApi.VoidTraditionalManifest(id);
  }
  async add(traditionalManifest: TraditionalManifestDM) {
    return await this.traditionalManifestDS.add(traditionalManifest);
  }

  async edit(traditionalManifest: TraditionalManifestDM) {
    return await this.traditionalManifestDS.edit(traditionalManifest);
  }

  async delete(traditionalManifest: TraditionalManifestDM) {
    return await this.traditionalManifestDS.delete(traditionalManifest);
  }

  deleteAllItems() {
    this.traditionalManifestDS.deleteAllItems();
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      return await this.traditionalManifestDS.doLoad(true, {
        fromDate: data.fromDate,
        toDate: data.toDate,
      });
    } else {
      return this.items;
    }
  }
}
