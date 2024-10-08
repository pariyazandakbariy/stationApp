import { Injectable } from '@angular/core';
import { TraditionalManifestApiService } from 'src/app/api/traditionalManifest-api.service';
import { TraditionalManifestItemApiService } from 'src/app/api/traditionalManifestItem-api.service';
import { isEmpty } from '../../utils/object';
import TraditionalManifestItemDM from '../dataModels/traditionalManifestItemDM';
import { TraditionalManifestDS } from '../dataStore/traditionalManifestDS';

@Injectable({
  providedIn: 'root',
})
export class TraditionalManifestItemCS {
  constructor(
    private traditionalManifestApi: TraditionalManifestItemApiService
  ) {
    this.onInitialization();
  }

  async onInitialization() {}

  getTraditionalManifestById(id: string) {
    return this.traditionalManifestApi.getTraditionalManifestById(id);
  }

  add(traditionalManifestItem: TraditionalManifestItemDM) {
    return this.traditionalManifestApi.add(traditionalManifestItem);
  }

  edit(traditionalManifestItem: TraditionalManifestItemDM) {
    return this.traditionalManifestApi.edit(traditionalManifestItem);
  }
  async delete(traditionalManifestItem: TraditionalManifestItemDM) {
    return await this.traditionalManifestApi.delete(traditionalManifestItem);
  }
  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {}
}
