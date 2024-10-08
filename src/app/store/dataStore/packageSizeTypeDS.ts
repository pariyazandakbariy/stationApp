import { Injectable } from '@angular/core';
import PackageSizeTypeDM from '../dataModels/packageSizeTypeDM';
import BaseItemDS from './base/baseItemDS';

@Injectable({
  providedIn: 'root',
})
export class PackageSizeTypeDS extends BaseItemDS<PackageSizeTypeDM> {
  constructor() {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(force: boolean = false) {}
}
