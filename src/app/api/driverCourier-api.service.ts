import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import DriverCourierDM from '../store/dataModels/driverCourierDM';

@Injectable({
  providedIn: 'root',
})
export class DriverCourierApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async DriverCourierList() {
    const data: any = await this.httpRequest.GET(
      '/Entities/Driver/DriverCourierList'
    );
    return JsonParser.deserializeArray(data, DriverCourierDM);
  }
}
