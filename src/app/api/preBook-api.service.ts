import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import PreBookDM from '../store/dataModels/preBookDM';

@Injectable({
  providedIn: 'root',
})
export class PreBookApiService {
  constructor(private httpRequest: HttpRequestService) {}

  async getQuote(preBook: PreBookDM) {
    const params = {
      OriginCityCode: preBook.originCity?.cityId,
      DestinationCityCode: preBook.destinationCity?.cityId,
      OriginOfficeCode: preBook.originOffice?.officeId,
      DestinationOfficeCode: preBook.destinationOffice?.officeId,
      PickupPointType: preBook.pickupPointType,
      DeliveryPointType: preBook.deliveryPointType,
      PackageInfo: preBook.packagesInfo.map((packageInfo) => {
        return {
          PackageTypeCode: packageInfo.packageType?.packageTypeID,
          PackageSize: {
            X: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.x
              : packageInfo.packageSizeType?.x,
            Y: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.y
              : packageInfo.packageSizeType?.y,
            Z: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.z
              : packageInfo.packageSizeType?.z,
          },
          PackageTypeSizeCode: packageInfo.packageSizeType?.packageTypeSizeID,
          PackageWeight: packageInfo.packageWeight,
          ExceptionTypeCode: packageInfo.exceptionType?.exceptionTypeID,
          QTY: packageInfo.QTY,
        };
      }),
    };
    const data: any = await this.httpRequest.POST('/Freight/GetQuote', params);
    return data.result;
  }
}
