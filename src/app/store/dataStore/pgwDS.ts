import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import PgwDM from '../dataModels/pgwDM';

@Injectable({
  providedIn: 'root',
})
export class PgwDS extends BaseItemDS<PgwDM> {
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
