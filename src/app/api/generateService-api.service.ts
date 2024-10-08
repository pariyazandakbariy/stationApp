import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { TOAST_MESSAGES } from '../utils/constants';
import { Toast } from '../utils/toast';
import { JsonParser } from '../utils/jsonparser';
import GenerateServiceDM from '../store/dataModels/generateServiceDM';
import ServiceDM from '../store/dataModels/serviceDM';
import GenerateServiceManifestDM from '../store/dataModels/generateServiceManifestDM';
import OfficeDM from '../store/dataModels/officeDM';

@Injectable({
  providedIn: 'root',
})
export class GenerateServiceApiService {
  constructor(private httpRequest: HttpRequestService) {}

  @Toast<GenerateServiceDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async GenerateServiceSchedule(generateService: GenerateServiceDM) {
    const params = {
      VehicleTypeCode: generateService.vehicleType?.vehicleTypeId,
      VehicleCode: generateService.vehicle?.vehicleId,
      CarrierCode: generateService.carrier?.carrierId,
      ServiceNo: generateService.serviceNo,
      FromDate: generateService.fromDate,
      ToDate: generateService.toDate,
      DepartureTime: generateService.departureTime,
      ArrivalTime: generateService.arrivalTime,
      OriginCityCode: generateService.originCity?.cityId,
      DestinationCityCode: generateService.destinationCity?.cityId,
      OriginOfficeCode: generateService.originOffice?.officeId,
      DestinationOfficeCode: generateService.destinationOffice?.officeId,
      DayOfWeek: generateService.dayOfWeek,
      MiddleStations: generateService.minimalStations.map((item, i) => {
        return {
          OfficeCode: item.office?.officeId,
          StopTime: item.stopTime,
        };
      }),
      DriverCode: generateService.driverCode,
    };
    const data: any = await this.httpRequest.POST(
      '/Service/GenerateServiceSchedule',
      params
    );
    return data;
  }

  public async ServicesListByDestinationOfficeCode(
    destinationOffice: OfficeDM
  ) {
    const params = {
      DestinationOfficeCode: destinationOffice.officeId,
    };
    const data: any = await this.httpRequest.POST(
      '/Service/ServicesListByDestinationOfficeCode',
      params
    );
    return JsonParser.deserializeArray(data, ServiceDM);
  }

  @Toast<GenerateServiceDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async BoardItems(
    manifestCode: number,
    itemUniqueKeys: string[],
    serviceCode: number
  ) {
    const params = {
      ManifestCode: manifestCode,
      ItemUniqueKeys: itemUniqueKeys,
      ServiceCode: serviceCode,
    };
    const data: any = await this.httpRequest.POST(
      '/Routing/BoardItems',
      params
    );
    return data;
  }
  @Toast<GenerateServiceDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_VOID}`)
  public async VoidManifest(manifestCode: number) {
    const params = {
      ManifestID: manifestCode,
    };

    const data: any = await this.httpRequest.PUT(
      '/Manifest/VoidManifest',
      params
    );
    return data;
  }

  public async GenerateServiceManifest(
    itemUniqueKeys: string[],
    serviceCode: number
  ) {
    const params = {
      UniqueKeys: itemUniqueKeys,
      ServiceCode: serviceCode,
    };
    const data: any = await this.httpRequest.POST(
      '/Manifest/GenerateServiceManifest',
      params
    );
    return JsonParser.deserializeObject(data.result, GenerateServiceManifestDM);
  }
}
