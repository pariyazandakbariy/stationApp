import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import ServiceDM from '../store/dataModels/serviceDM';

@Injectable({
  providedIn: 'root',
})
export class ServiceByDateApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async serviceByDateList(fromDate: string, toDate: string) {
    const data: any = await this.httpRequest.GET(
      '/Service/ServiceListByDate/' + fromDate + '/' + toDate
    );
    return JsonParser.deserializeArray(data, ServiceDM);
  }
  public async ServicesListByOriginOfficeCodeAndDate(
    originCityCode: string,
    fromDate: string,
    toDate: string
  ) {
    const param = {
      OriginOfficeCode: originCityCode + '999',
      FromDate: fromDate,
      ToDate: toDate,
    };
    const data: any = await this.httpRequest.POST(
      '/Service/ServicesListByOriginOfficeCodeAndDate',
      param
    );
    return JsonParser.deserializeArray(data, ServiceDM);
  }
}
