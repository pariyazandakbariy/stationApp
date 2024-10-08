import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import RouteDM from '../store/dataModels/routeDM';

@Injectable({
  providedIn: 'root',
})
export class RouteApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async RouteList() {
    const data: any = await this.httpRequest.GET('/Entities/Route/RouteList');
    return JsonParser.deserializeArray(data, RouteDM);
  }
}
