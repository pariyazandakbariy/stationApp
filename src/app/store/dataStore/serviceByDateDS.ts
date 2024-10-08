import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import { ServiceByDateApiService } from 'src/app/api/serviceByDate-api.service';
import ServiceDM from '../dataModels/serviceDM';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceByDateDS extends BaseItemDS<ServiceDM> {
  constructor(
    private serviceByDateApi: ServiceByDateApiService,
    private ServiceInformationApi: ServiceInformationApiService
  ) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async ServicesListByOriginOfficeCodeAndDate(
    force: boolean = false,
    data: { originCityCode: string; fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      const servicesByDate =
        await this.serviceByDateApi.ServicesListByOriginOfficeCodeAndDate(
          data.originCityCode,
          data.fromDate,
          data.toDate
        );
      await this.deleteAllItems();
      await this.addOrReplaceItems(servicesByDate);
      return servicesByDate;
    } else {
      return this.items;
    }
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      const serviceByDate = await this.serviceByDateApi.serviceByDateList(
        data.fromDate,
        data.toDate
      );
      await this.deleteAllItems();
      await this.addOrReplaceItems(serviceByDate);
      return serviceByDate;
    } else {
      return this.items;
    }
  }
}
