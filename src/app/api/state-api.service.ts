import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import StateDM from '../store/dataModels/stateDM';

@Injectable({
  providedIn: 'root',
})
export class StateApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async StateList() {
    const data: any = await this.httpRequest.GET(
      '/Entities/CountryState/CountryStateList'
    );
    return JsonParser.deserializeArray(data, StateDM);
  }
}
