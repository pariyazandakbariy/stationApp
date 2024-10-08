import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import CityDM from '../store/dataModels/cityDM';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async CityList() {
    const data: any = await this.httpRequest.GET('/Entities/City/CityList');
    return JsonParser.deserializeArray(data, CityDM);
  }
}
