import { OfficeApiService } from 'src/app/api/office-api.service';
import { isEmpty } from '../../utils/object';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';
import MyInfoDM from '../dataModels/myInfoDM';

@Injectable({
  providedIn: 'root',
})
export class MyInfoDS extends BaseItemDS<MyInfoDM> {
  constructor() {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  doLoad(force: boolean): void {
    throw new Error('Method not implemented.');
  }
}
