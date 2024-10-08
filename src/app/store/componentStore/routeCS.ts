import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { RouteDS } from '../dataStore/routeDS';

@Injectable({
  providedIn: 'root',
})
export class RouteCS {
  get itemsWatch() {
    return this.routeDS.itemsWatch;
  }

  get items() {
    return this.routeDS.items;
  }

  constructor(private routeDS: RouteDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.routeDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.routeDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
