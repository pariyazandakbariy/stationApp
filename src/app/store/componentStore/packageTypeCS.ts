import { Injectable } from '@angular/core';
import { PackageTypeDS } from '../dataStore/packageTypeDS';

@Injectable({
  providedIn: 'root',
})
export class PackageTypeCS {
  get itemsWatch() {
    return this.packageTypeDS.itemsWatch;
  }

  get items() {
    return this.packageTypeDS.items;
  }

  constructor(private packageTypeDS: PackageTypeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.packageTypeDS.itemsWatch.subscribe((items) => {
      //
    });
  }
}
