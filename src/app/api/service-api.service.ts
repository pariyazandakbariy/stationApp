import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import { TOAST_MESSAGES } from '../utils/constants';
import { Toast } from '../utils/toast';
import ServiceDM from '../store/dataModels/serviceDM';
import ServiceCargoDM from '../store/dataModels/serviceCargoDM';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async ServiceList() {
    const data: any = await this.httpRequest.GET('/Service/ServiceList');
    return JsonParser.deserializeArray(data, ServiceDM);
  }

  public async IncomingItems() {
    const data: any = await this.httpRequest.GET('/Routing/IncomingItems');
    return JsonParser.deserializeArray(data, ServiceCargoDM);
  }

  public async OutgoingItems() {
    const data: any = await this.httpRequest.GET('/Routing/OutgoingItems');
    return JsonParser.deserializeArray(data, ServiceCargoDM);
  }

  @Toast<ServiceDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async ServiceItems(code: string) {
    const data: any = await this.httpRequest.GET(
      '/Routing/ServiceItems/' + code
    );
    return JsonParser.deserializeArray(data, ServiceCargoDM);
  }

  @Toast<ServiceDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async OffloadItems(uniqueKeys: string[]) {
    const params = {
      ItemUniqueKeys: uniqueKeys,
    };
    const data: any = await this.httpRequest.POST(
      '/Routing/OffloadItems',
      params
    );
    return data;
  }
}
