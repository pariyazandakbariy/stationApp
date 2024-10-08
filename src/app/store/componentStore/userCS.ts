import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { BehaviorSubject } from 'rxjs';
import UserDM from '../dataModels/userDM';
import { UserDS } from '../dataStore/userDS';

@Injectable({
  providedIn: 'root',
})
export class UserCS {
  get itemsWatch() {
    return this.userDS.itemsWatch;
  }

  get items() {
    return this.userDS.items;
  }

  constructor(private userDS: UserDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.userDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      return await this.userDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
