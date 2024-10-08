import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';
import OfficeDepotItemDM from '../store/dataModels/officeDepotItemDM';
import OfficeDM from '../store/dataModels/officeDM';
import PackageInfoDM from '../store/dataModels/packageInfoDM';

@Injectable({
  providedIn: 'root',
})
export class OfficeDepotItemApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async OfficeDepotItemList() {
    const data: any = await this.httpRequest.GET('/Routing/OfficeDepotItems');
    return JsonParser.deserializeArray(data, OfficeDepotItemDM);
  }
  public async OfficeDepotItemToDeliveryList() {
    const data: any = await this.httpRequest.GET(
      '/Routing/OfficeDepotItems/TODELIVERY'
    );
    return JsonParser.deserializeArray(data, OfficeDepotItemDM);
  }
  public async OfficeDepotItemToTransferList() {
    const data: any = await this.httpRequest.GET(
      '/Routing/OfficeDepotItems/TOTRANSFER'
    );
    return JsonParser.deserializeArray(data, OfficeDepotItemDM);
  }

  @Toast<OfficeDepotItemDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async CompleteOperation(
    billCode: string,
    receiverPersonName: string,
    receiverPersonIDNumber: string,
    daysInWareHouse: number,
    courierAmount: number,
    wareHouseCostAmount: number,
    destinationChargeAmount: number
  ) {
    const params = {
      BillCode: billCode,
      ReceiverPersonName: receiverPersonName,
      ReceiverPersonIDNumber: receiverPersonIDNumber,
      DaysInWareHouse: daysInWareHouse,
      CourierAmount: courierAmount,
      WareHouseCostAmount: wareHouseCostAmount,
      DestinationChargeAmount: destinationChargeAmount,
    };
    const data: any = await this.httpRequest.PUT(
      '/Routing/CompleteOperation',
      params
    );
    return data;
  }

  @Toast<OfficeDepotItemDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async DeliverItems(uniqueKeys: string[]) {
    const params = {
      ItemUniqueKeys: uniqueKeys,
    };
    const data: any = await this.httpRequest.PUT(
      '/Routing/DeliverItems',
      params
    );
    return data;
  }

  @Toast<OfficeDepotItemDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async AggregateItems(
    station: OfficeDM,
    packageInfo: PackageInfoDM,
    uniqueKeys: string[]
  ) {
    const params = {
      UniqueKeys: uniqueKeys,
      DestinationOfficeCode: station.officeId,
      PackageInfo: {
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
        ExceptionTypeCode: packageInfo.exceptionType?.exceptionTypeID,
      },
    };
    const data: any = await this.httpRequest.POST(
      '/Freight/AggregateItems',
      params
    );
    return data.result;
  }

  @Toast<OfficeDepotItemDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async DisAggregateItems(billCode: string) {
    const params = {
      BillCode: billCode,
    };
    const data: any = await this.httpRequest.POST(
      '/Freight/DisaggregateItems',
      params
    );
    return data;
  }
}
