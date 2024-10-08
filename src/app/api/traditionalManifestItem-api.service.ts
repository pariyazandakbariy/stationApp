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
export class TraditionalManifestItemApiService {
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

  public async getTraditionalManifestById(id: string) {
    const data: any = await this.httpRequest.GET(
      '/Entities/TraditionalManifest/TraditionalManifestInformation/' + id
    );
    return JsonParser.deserializeObject(data, TraditionalManifestDM);
  }

  @Toast<TraditionalManifestItemDM>(
    (result) => ` ${result.billNumber} ${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  async add(traditionalManifestItem: TraditionalManifestItemDM) {
    const params = {
      BillNumber: traditionalManifestItem.billNumber,
      BillDate: traditionalManifestItem.billDate,
      ReceiverFullName: traditionalManifestItem.receiverFullName,
      ReceiverMobilePhone: traditionalManifestItem.receiverMobilePhone,
      ItemCount: traditionalManifestItem.itemCount,
      Description: traditionalManifestItem.description,
      PriceToCollectAmount: traditionalManifestItem.priceToCollectAmount,
      TraditionalManifestCode: traditionalManifestItem.traditionalManifestCode,
      CityServicesAmount: traditionalManifestItem.cityServicesAmount,
      ExtraServicesAmount: traditionalManifestItem.extraServicesAmount,
      TransitServicesAmount: traditionalManifestItem.transitServicesAmount,
      VAT: traditionalManifestItem.vat,
      PrepaymentAmount: traditionalManifestItem.prepaymentAmount,
    };
    const data: any = await this.httpRequest.POST(
      '/Entities/TraditionalManifestItem/TraditionalManifestItemAdd ',
      params
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestItemDM);
  }

  @Toast<TraditionalManifestItemDM>(
    (result) => ` ${result.billNumber} ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`
  )
  async edit(traditionalManifestItem: TraditionalManifestItemDM) {
    const params = {
      TraditionalManifestItemID: traditionalManifestItem.traditionalManifestId,
      BillNumber: traditionalManifestItem.billNumber,
      BillDate: traditionalManifestItem.billDate,
      ReceiverFullName: traditionalManifestItem.receiverFullName,
      ReceiverMobilePhone: traditionalManifestItem.receiverMobilePhone,
      ItemCount: traditionalManifestItem.itemCount,
      Description: traditionalManifestItem.description,
      PriceToCollectAmount: traditionalManifestItem.priceToCollectAmount,
      TraditionalManifestCode: traditionalManifestItem.traditionalManifestCode,
    };
    const data: any = await this.httpRequest.PUT(
      '/Entities/TraditionalManifestItem/TraditionalManifestItemEdit ',
      params
    );
    return JsonParser.deserializeObject(data.result, TraditionalManifestItemDM);
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
    (result) => ` ${TOAST_MESSAGES.SUCCESSFUL_DELETED}`
  )
  async delete(traditionalManifestItem: TraditionalManifestItemDM) {
    const data: any = await this.httpRequest.DELETE(
      '/Entities/TraditionalManifestItem/TraditionalManifestItemRemove/' +
        traditionalManifestItem.traditionalManifestId
    );
    return 'Success';
  }
}
