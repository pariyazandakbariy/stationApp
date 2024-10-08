import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { PrinterDS } from '../dataStore/printerDS';
import PrinterDM from '../dataModels/printerDM';

@Injectable({
  providedIn: 'root',
})
export class PrinterCS {
  get itemsWatch() {
    return this.printerDS.itemsWatch;
  }

  get items() {
    return this.printerDS.items;
  }

  constructor(private printerDS: PrinterDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.printerDS.itemsWatch.subscribe((items) => {
      //
    });
  }
  async add(printer: PrinterDM) {
    return await this.printerDS.add(printer);
  }

  async edit(printer: PrinterDM) {
    return await this.printerDS.edit(printer);
  }

  async delete(printer: PrinterDM) {
    return await this.printerDS.delete(printer);
  }
  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.printerDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
