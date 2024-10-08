import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import UserDM from '../dataModels/userDM';
import { UserApiService } from 'src/app/api/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserDS extends BaseItemDS<UserDM> {
  constructor(private userApi: UserApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean) {
    // if (force || isEmpty(this.items)) {
    //   const users = await this.userApi.UserList();
    //   await this.addOrReplaceItems(users);
    //   return users;
    // } else {
    //   return this.items;
    // }
  }
}
