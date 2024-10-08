import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import PrinterDM from '../dataModels/printerDM';
import { PrinterApiService } from 'src/app/api/printer-api.service';

@Injectable({
  providedIn: 'root',
})
export class PrinterDS extends BaseItemDS<PrinterDM> {
  constructor(private printerApi: PrinterApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }
  async add(printer: PrinterDM) {
    const data = await this.printerApi.add(printer);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(printer: PrinterDM) {
    const data = await this.printerApi.edit(printer);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(printer: PrinterDM) {
    await this.printerApi.delete(printer);
    this.removeItem(printer.officePrinterID);
    return 'done';
  }
  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      const printers = await this.printerApi.OfficePrinterList();
      await this.addOrReplaceItems(printers);
      return printers;
    } else {
      return this.items;
    }
  }
}
