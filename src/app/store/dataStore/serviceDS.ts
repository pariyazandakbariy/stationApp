import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import { ServiceByDateApiService } from 'src/app/api/serviceByDate-api.service';
import ServiceDM from '../dataModels/serviceDM';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';
import { ServiceApiService } from 'src/app/api/service-api.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceDS extends BaseItemDS<ServiceDM> {
  constructor(private serviceApi: ServiceApiService) {
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
      const services = await this.serviceApi.ServiceList();
      await this.addOrReplaceItems(services);
      return services;
    } else {
      return this.items;
    }
  }
}
