import { Injectable } from '@angular/core';

import { HttpRequestService } from '../services/http-request.service';
import VehicleDM from '../store/dataModels/vehicleDM';
import { TOAST_MESSAGES } from '../utils/constants';
import { JsonParser } from '../utils/jsonparser';
import { Toast } from '../utils/toast';

@Injectable({
  providedIn: 'root',
})
export class VehicleApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async VehicleList() {
    const data: any = await this.httpRequest.GET(
      '/Entities/Vehicle/VehicleList'
    );
    return JsonParser.deserializeArray(data, VehicleDM);
  }
  public async VehicleInformation(register: string) {
    const data: any = await this.httpRequest.GET(
      '/Entities/Vehicle/VehicleInformation/' + register
    );
    return JsonParser.deserializeArray(data, VehicleDM);
  }

  public async VehicleById(vehicleId: number) {
    const data: any = await this.httpRequest.GET(
      '/Entities/Vehicle/' + vehicleId
    );
    return JsonParser.deserializeObject(data.result, VehicleDM);
  }
  @Toast<VehicleDM>((result) => ` ${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  async add(vehicle: VehicleDM) {
    const params = {
      VehicleTypeCode: vehicle.vehicleType?.vehicleTypeId,
      CarrierCode: vehicle.carrier?.carrierId,
      Register: vehicle.register,
      OwnerFullName: vehicle.ownerFullName,
      OwnerMobilePhone: vehicle.ownerMobilePhone,
      Courier: vehicle.courier,
      Transporter: vehicle.transporter,
    };
    const data: any = await this.httpRequest.POST(
      '/Entities/Vehicle/VehicleAdd',
      params
    );
    return JsonParser.deserializeObject(data.result, VehicleDM);
  }

  @Toast<VehicleDM>((result) => ` ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`)
  async edit(vehicle: VehicleDM) {
    const params = {
      VehicleID: vehicle.vehicleId,
      VehicleTypeCode: vehicle.vehicleType?.vehicleTypeId,
      CarrierCode: vehicle.carrier?.carrierId,
      Register: vehicle.register,
      OwnerFullName: vehicle.ownerFullName,
      OwnerMobilePhone: vehicle.ownerMobilePhone,
      Courier: vehicle.courier,
      Transporter: vehicle.transporter,
    };
    const data: any = await this.httpRequest.PUT(
      '/Entities/Vehicle/VehicleEdit',
      params
    );
    return JsonParser.deserializeObject(data.result, VehicleDM);
  }

  @Toast<VehicleDM>((result) => ` ${TOAST_MESSAGES.SUCCESSFUL_DELETED}`)
  async delete(vehicle: VehicleDM) {
    const data: any = await this.httpRequest.DELETE(
      '/Entities/Vehicle/VehicleRemove/' + vehicle.vehicleId
    );
    return 'Success';
  }
}
