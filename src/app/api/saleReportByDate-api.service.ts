import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import SaleReportByDateDM from '../store/dataModels/saleReportByDateDM';

@Injectable({
  providedIn: 'root',
})
export class SaleReportByDateApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async saleReportByDateList(fromDate: string, toDate: string) {
    const data: any = await this.httpRequest.GET(
      '/Bill/SalesReport/ByDate/' + fromDate + '/' + toDate
    );
    return JsonParser.deserializeArray(data, SaleReportByDateDM);
  }
}
