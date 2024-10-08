import { Injectable } from '@angular/core';
import { ExceptionTypeDS } from '../dataStore/exceptionTypeDS';

@Injectable({
  providedIn: 'root',
})
export class ExceptionTypeCS {
  get itemsWatch() {
    return this.exceptionTypeDS.itemsWatch;
  }

  get items() {
    return this.exceptionTypeDS.items;
  }

  constructor(private exceptionTypeDS: ExceptionTypeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.exceptionTypeDS.itemsWatch.subscribe((items) => {
      //
    });
  }
}
