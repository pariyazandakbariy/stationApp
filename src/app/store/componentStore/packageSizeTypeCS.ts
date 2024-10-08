import { Injectable } from '@angular/core';
import { PackageSizeTypeDS } from '../dataStore/packageSizeTypeDS';

@Injectable({
  providedIn: 'root',
})
export class PackageSizeTypeCS {
  get itemsWatch() {
    return this.packageSizeTypeDS.itemsWatch;
  }

  get items() {
    return this.packageSizeTypeDS.items;
  }

  constructor(private packageSizeTypeDS: PackageSizeTypeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.packageSizeTypeDS.itemsWatch.subscribe((items) => {
      //
    });
  }
}
