import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import OfficeDM from '../store/dataModels/officeDM';

@Injectable({
  providedIn: 'root',
})
export class OfficeApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async OfficeList() {
    const data: any = await this.httpRequest.GET('/Entities/Office/OfficeList');
    return JsonParser.deserializeArray(data, OfficeDM);
  }
}
