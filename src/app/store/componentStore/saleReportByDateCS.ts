import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { SaleReportByDateDS } from '../dataStore/saleReportByDateDS';
import SaleReportByDateDM from '../dataModels/saleReportByDateDM';

@Injectable({
  providedIn: 'root',
})
export class SaleReportByDateCS {
  get itemsWatch() {
    return this.saleReportByDateDS.itemsWatch;
  }

  get items() {
    return this.saleReportByDateDS.items;
  }

  constructor(private saleReportByDateDS: SaleReportByDateDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.saleReportByDateDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  getCityById(id: string) {
    return this.items.find(
      (saleReportByDate: SaleReportByDateDM) => saleReportByDate.billCode === id
    );
  }

  deleteAllItems() {
    this.saleReportByDateDS.deleteAllItems();
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      return await this.saleReportByDateDS.doLoad(true, {
        fromDate: data.fromDate,
        toDate: data.toDate,
      });
    } else {
      return this.items;
    }
  }
}
