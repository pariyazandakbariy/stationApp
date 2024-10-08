import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import { ManifestApiService } from 'src/app/api/manifest-api.service';
import TraditionalManifestDM from '../dataModels/traditionalManifestDM';
import { TraditionalManifestApiService } from 'src/app/api/traditionalManifest-api.service';

@Injectable({
  providedIn: 'root',
})
export class TraditionalManifestDS extends BaseItemDS<TraditionalManifestDM> {
  constructor(private traditionalManifestApi: TraditionalManifestApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(traditionalManifest: TraditionalManifestDM) {
    const data = await this.traditionalManifestApi.add(traditionalManifest);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(traditionalManifest: TraditionalManifestDM) {
    const data = await this.traditionalManifestApi.edit(traditionalManifest);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(traditionalManifest: TraditionalManifestDM) {
    await this.traditionalManifestApi.delete(traditionalManifest);
    this.removeItem(traditionalManifest.traditionalManifestId);
    return 'done';
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      const traditionalManifestsByDate =
        await this.traditionalManifestApi.traditionalManifestsByDateList(
          data.fromDate,
          data.toDate
        );
      await this.deleteAllItems();
      await this.addOrReplaceItems(traditionalManifestsByDate);
      return traditionalManifestsByDate;
    } else {
      return this.items;
    }
  }
}
