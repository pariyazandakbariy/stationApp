import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import PackageTypeDM from '../dataModels/packageTypeDM';

@Injectable({
  providedIn: 'root',
})
export class PackageTypeDS extends BaseItemDS<PackageTypeDM> {
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
