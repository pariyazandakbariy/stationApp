import { Injectable } from '@angular/core';
import { PgwDS } from '../dataStore/pgwDS';

@Injectable({
  providedIn: 'root',
})
export class PgwCS {
  get itemsWatch() {
    return this.pgwDS.itemsWatch;
  }

  get items() {
    return this.pgwDS.items;
  }

  constructor(private pgwDS: PgwDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.pgwDS.itemsWatch.subscribe((items) => {
      //
    });
  }
}
