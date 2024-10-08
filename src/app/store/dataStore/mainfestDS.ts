import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import ManifestDM from '../dataModels/manifestDM';
import { ManifestApiService } from 'src/app/api/manifest-api.service';

@Injectable({
  providedIn: 'root',
})
export class ManifestDS extends BaseItemDS<ManifestDM> {
  constructor(private manifestApi: ManifestApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      const manifestsByDate = await this.manifestApi.manifestByDateList(
        data.fromDate,
        data.toDate
      );
      await this.deleteAllItems();
      await this.addOrReplaceItems(manifestsByDate);
      return manifestsByDate;
    } else {
      return this.items;
    }
  }
}
