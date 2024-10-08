import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';
import ServiceDM from '../store/dataModels/serviceDM';
import GenerateServiceDM from '../store/dataModels/generateServiceDM';

@Injectable({
  providedIn: 'root',
})
export class ServiceInformationApiService {
  constructor(private httpRequest: HttpRequestService) {}

  async ServiceInformation(serviceId: string) {
    const data: any = await this.httpRequest.GET(
      '/Service/ServiceInformation/' + serviceId
    );
    return JsonParser.deserializeObject(data, ServiceDM);
  }

  @Toast<ServiceDM>(
    (result) => ` ${result.serviceNo} ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`
  )
  async edit(generateService: GenerateServiceDM) {
    const params = {
      ServiceID: generateService.serviceId,
      VehicleTypeCode: generateService.vehicleType?.vehicleTypeId,
      VehicleCode: generateService.vehicle?.vehicleId,
      CarrierCode: generateService.carrier?.carrierId,
      ServiceNo: generateService.serviceNo,
      DepartureDateTime:
        generateService.fromDate + ' ' + generateService.departureTime + ':00',
      ArrivalDateTime:
        generateService.toDate + ' ' + generateService.arrivalTime + ':00',
      OriginCityCode: generateService.originCity?.cityId,
      DestinationCityCode: generateService.destinationCity?.cityId,
      OriginOfficeCode: generateService.originOffice?.officeId,
      DestinationOfficeCode: generateService.destinationOffice?.officeId,
      DriverCode: generateService.driverCode,
    };
    const data: any = await this.httpRequest.PUT(
      '/Service/ServiceEdit ',
      params
    );
    return JsonParser.deserializeObject(data, ServiceDM);
  }
}
