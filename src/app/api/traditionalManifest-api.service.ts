import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import TraditionalManifestDM from '../store/dataModels/traditionalManifestDM';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';
import TraditionalManifestItemDM from '../store/dataModels/traditionalManifestItemDM';

@Injectable({
  providedIn: 'root',
})
export class TraditionalManifestApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async traditionalManifest(code: number) {
    const data: any = await this.httpRequest.GET(
      'Entities/TraditionalManifest/TraditionalManifestInformation/' + code
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestDM);
  }

  public async traditionalManifestsByDateList(
    fromDate: string,
    toDate: string
  ) {
    const data: any = await this.httpRequest.GET(
      '/Entities/TraditionalManifest/ListByDate/' + fromDate + '/' + toDate
    );
    return JsonParser.deserializeArray(data, TraditionalManifestDM);
  }

  public async getTraditionalManifestById(id: number) {
    const data: any = await this.httpRequest.GET(
      '/Entities/TraditionalManifest/TraditionalManifestInformation/' + id
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestDM);
  }

  async ProcessTraditionalManifest(id: number) {
    const params = {
      TraditionalManifestCode: id,
    };
    const data: any = await this.httpRequest.POST(
      '/Manifest/ProcessTraditionalManifest ',
      params
    );
    return data.result;
  }

  @Toast<TraditionalManifestDM>(
    (result) => ` ${TOAST_MESSAGES.SUCCESSFUL_VOID}`
  )
  async VoidTraditionalManifest(id: number) {
    const params = {
      TraditionalManifestID: id,
    };
    const data: any = await this.httpRequest.PUT(
      '/Manifest/VoidTraditionalManifest  ',
      params
    );
    return data.result;
  }

  @Toast<TraditionalManifestDM>(
    (result) => ` ${result.manifestNumber} ${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  async add(traditionalManifest: TraditionalManifestDM) {
    const params = {
      ServiceCode: traditionalManifest.service?.serviceId,
      ManifestNumber: traditionalManifest.manifestNumber,
      ManifestDateTime: traditionalManifest.manifestDateTime,
      IncommingCargo: true,
      OriginCityCode: traditionalManifest.originCity?.cityId,
    };
    const data: any = await this.httpRequest.POST(
      '/Entities/TraditionalManifest/TraditionalManifestAdd',
      params
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestDM);
  }

  @Toast<TraditionalManifestDM>(
    (result) => ` ${result.manifestNumber} ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`
  )
  async edit(traditionalManifest: TraditionalManifestDM) {
    const params = {
      TraditionalManifestID: traditionalManifest.traditionalManifestId,
      ServiceCode: traditionalManifest.service?.serviceId,
      ManifestNumber: traditionalManifest.manifestNumber,
      ManifestDateTime: traditionalManifest.manifestDateTime,
      IncommingCargo: true,
      OriginCityCode: traditionalManifest.originCity?.cityId,
    };
    const data: any = await this.httpRequest.PUT(
      '/Entities/TraditionalManifest/TraditionalManifestEdit ',
      params
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestDM);
  }

  @Toast<TraditionalManifestDM>(
    (result) => ` ${TOAST_MESSAGES.SUCCESSFUL_DELETED}`
  )
  async delete(traditionalManifest: TraditionalManifestDM) {
    const data: any = await this.httpRequest.DELETE(
      '/Entities/TraditionalManifest/TraditionalManifestRemove/' +
        traditionalManifest.traditionalManifestId
    );
    return 'Success';
  }
}
