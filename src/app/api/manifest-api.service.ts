import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import ManifestDM from '../store/dataModels/manifestDM';
import ManifestInformationDM from '../store/dataModels/manifestInformationDM';

@Injectable({
  providedIn: 'root',
})
export class ManifestApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async manifest(code: string) {
    const data: any = await this.httpRequest.GET(
      '/Manifest/ManifestInformation/' + code
    );
    return JsonParser.deserializeObject(data.result, ManifestInformationDM);
  }

  public async manifestByDateList(fromDate: string, toDate: string) {
    const data: any = await this.httpRequest.GET(
      '/Manifest/ListByDate/' + fromDate + '/' + toDate
    );
    return JsonParser.deserializeArray(data, ManifestDM);
  }
}
