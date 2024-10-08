import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import SaleReportByDateDM from '../dataModels/saleReportByDateDM';
import { SaleReportByDateApiService } from 'src/app/api/saleReportByDate-api.service';

@Injectable({
  providedIn: 'root',
})
export class SaleReportByDateDS extends BaseItemDS<SaleReportByDateDM> {
  constructor(private saleReportByDateApi: SaleReportByDateApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async doLoad(
    force: boolean = false,
    data: { fromDate: string; toDate: string }
  ) {
    if (force || isEmpty(this.items)) {
      const salesReportByDate =
        await this.saleReportByDateApi.saleReportByDateList(
          data.fromDate,
          data.toDate
        );
      await this.deleteAllItems();
      await this.addOrReplaceItems(salesReportByDate);
      return salesReportByDate;
    } else {
      return this.items;
    }
  }
}
