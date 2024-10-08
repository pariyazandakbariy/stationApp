import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import ExceptionTypeDM from '../dataModels/exceptionTypeDM';

@Injectable({
  providedIn: 'root',
})
export class ExceptionTypeDS extends BaseItemDS<ExceptionTypeDM> {
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
