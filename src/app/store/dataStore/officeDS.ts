import { OfficeApiService } from 'src/app/api/office-api.service';
import OfficeDM from '../dataModels/officeDM';
import { isEmpty } from '../../utils/object';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfficeDS extends BaseItemDS<OfficeDM> {
  constructor(private officeApiService: OfficeApiService) {
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
      const offices = await this.officeApiService.OfficeList();
      await this.addOrReplaceItems(offices);
      return offices;
    } else {
      return this.items;
    }
  }
}
