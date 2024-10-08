import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import BookDM from '../store/dataModels/bookDM';
import { TOAST_MESSAGES } from '../utils/constants';
import { Toast } from '../utils/toast';
import { JsonParser } from '../utils/jsonparser';
import SalesReportDM from '../store/dataModels/SalesReportDM';

@Injectable({
  providedIn: 'root',
})
export class SalesReportApiService {
  constructor(private httpRequest: HttpRequestService) {}

  async SalesReportByBillCode(code: string) {
    const data: any = await this.httpRequest.GET(
      '/Bill/SalesReport/ByBillCode/' + code
    );
    return JsonParser.deserializeObject(data, SalesReportDM);
  }
}
