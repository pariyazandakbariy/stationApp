import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { StateDS } from '../dataStore/stateDS';

@Injectable({
  providedIn: 'root',
})
export class StateCS {
  get itemsWatch() {
    return this.stateDS.itemsWatch;
  }

  get items() {
    return this.stateDS.items;
  }

  constructor(private stateDS: StateDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.stateDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.stateDS.doLoad(force);
    } else {
      return this.items;
    }
  }
}
