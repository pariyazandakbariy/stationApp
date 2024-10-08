import { Injectable } from '@angular/core';

import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import VehicleTypeDM from '../store/dataModels/vehicleTypeDM';

@Injectable({
  providedIn: 'root',
})
export class VehicleTypeApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async VehicleTypeList() {
    const data: any = await this.httpRequest.GET(
      '/Entities/VehicleType/VehicleTypeList'
    );
    return JsonParser.deserializeArray(data, VehicleTypeDM);
  }
}
