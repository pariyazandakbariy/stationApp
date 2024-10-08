import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import BillInformationDM from '../store/dataModels/billInformationDM';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class BillInformationApiService {
  constructor(private httpRequest: HttpRequestService) {}

  async BillInformation(billCode: string) {
    const data: any = await this.httpRequest.GET(
      '/Freight/BillInformation/' + billCode
    );
    return JsonParser.deserializeObject(data.result, BillInformationDM);
  }
  @Toast<string>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async PrintBillLabels(printerNo: number, billCode: string) {
    const params = {
      PrinterNo: printerNo,
      BillID: billCode,
    };
    const data: any = await this.httpRequest.POST(
      '/Print/PrintBillLabels',
      params
    );
    return data;
  }
  @Toast<string>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async PrintBillItemLabel(printerNo: number, uniqueKey: string) {
    const params = {
      PrinterNo: printerNo,
      UniqueKey: uniqueKey,
    };
    const data: any = await this.httpRequest.POST(
      '/Print/PrintBillItemLabel',
      params
    );
    return data;
  }
}
