import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import DriverDM from '../store/dataModels/driverDM';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class DriverApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async DriverInformation(id: number) {
    const data: any = await this.httpRequest.GET(
      '/Entities/Driver/DriverInformation/' + id
    );

    return JsonParser.deserializeObject(data.result, DriverDM);
  }
  public async DriverList() {
    const data: any = await this.httpRequest.GET('/Entities/Driver/DriverList');
    return JsonParser.deserializeArray(data, DriverDM);
  }

  @Toast<DriverDM>(
    (result) => ` ${result.lastName} ${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  async add(driver: DriverDM) {
    const params = {
      FirstName: driver.firstName,
      LastName: driver.lastName,
      Gender: driver.gender.value,
      NationalityCountryCode: 'IR',
      NationalCode: driver.nationalCode,
      MobilePhone: driver.mobilePhone,
      ExtraInfo: '',
    };
    const data: any = await this.httpRequest.POST(
      '/Entities/Driver/DriverAdd',
      params
    );
    return JsonParser.deserializeObject(data.result, DriverDM);
  }

  @Toast<DriverDM>(
    (result) => ` ${result.lastName} ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`
  )
  async edit(driver: DriverDM) {
    const params = {
      DriverID: driver.driverId,
      FirstName: driver.firstName,
      LastName: driver.lastName,
      Gender: driver.gender.value,
      NationalityCountryCode: 'IR',
      NationalCode: driver.nationalCode,
      MobilePhone: driver.mobilePhone,
      ExtraInfo: '',
    };
    const data: any = await this.httpRequest.PUT(
      '/Entities/Driver/DriverEdit',
      params
    );
    return JsonParser.deserializeObject(data.result, DriverDM);
  }

  @Toast<DriverDM>((result) => ` ${TOAST_MESSAGES.SUCCESSFUL_DELETED}`)
  async delete(driver: DriverDM) {
    const data: any = await this.httpRequest.DELETE(
      '/Entities/Driver/DriverRemove/' + driver.driverId
    );
    return 'Success';
  }
}
