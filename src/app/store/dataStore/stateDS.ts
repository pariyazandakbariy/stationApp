import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import StateDM from '../dataModels/stateDM';
import { StateApiService } from 'src/app/api/state-api.service';

@Injectable({
  providedIn: 'root',
})
export class StateDS extends BaseItemDS<StateDM> {
  constructor(private stateApi: StateApiService) {
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
      const states = await this.stateApi.StateList();
      await this.addOrReplaceItems(states);
      return states;
    } else {
      return this.items;
    }
  }
}
