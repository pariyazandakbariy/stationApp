import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import RouteDM from '../dataModels/routeDM';
import { RouteApiService } from 'src/app/api/route-api.service';

@Injectable({
  providedIn: 'root',
})
export class RouteDS extends BaseItemDS<RouteDM> {
  constructor(private routeApi: RouteApiService) {
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
      const routes = await this.routeApi.RouteList();
      await this.addOrReplaceItems(routes);
      return routes;
    } else {
      return this.items;
    }
  }
}
