import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import BaseInfoDM from '../store/dataModels/baseInfoDM';
import { CityDS } from '../store/dataStore/cityDS';
import { StateDS } from '../store/dataStore/stateDS';
import { ExceptionTypeDS } from '../store/dataStore/exceptionTypeDS';
import { PgwDS } from '../store/dataStore/pgwDS';
import { PackageSizeTypeDS } from '../store/dataStore/packageSizeTypeDS';
import { PackageTypeDS } from '../store/dataStore/packageTypeDS';
import MyInfoDM from '../store/dataModels/myInfoDM';
import { ApplicationDS } from '../store/applicationDS.service';
import { CarrierDS } from '../store/dataStore/carrierDS';
import { PrinterDS } from '../store/dataStore/printerDS';
import { VehicleTypeDS } from '../store/dataStore/vehicleTypeDS';

@Injectable({
  providedIn: 'root',
})
export class BaseInfoApiService {
  constructor(
    private httpRequest: HttpRequestService,
    private cityDS: CityDS,
    private exceptionTypeDS: ExceptionTypeDS,
    private pgwDS: PgwDS,
    private packageSizeTypeDS: PackageSizeTypeDS,
    private packageTypeDS: PackageTypeDS,
    private stateDS: StateDS,
    private carrierDS: CarrierDS,
    private printerDS: PrinterDS,
    private vehicleTypeDS: VehicleTypeDS,
    private applicationDS: ApplicationDS
  ) {}

  public async AllBaseInfo() {
    try {
      const data: any = await this.httpRequest.GET('/Base/AllBaseInfo');
      const allBaseInfo = JsonParser.deserializeObject(data, BaseInfoDM);
      await this.cityDS.addOrReplaceItems(allBaseInfo.cities);
      await this.stateDS.addOrReplaceItems(allBaseInfo.countryStates);
      await this.exceptionTypeDS.addOrReplaceItems(allBaseInfo.exceptionTypes);
      await this.pgwDS.addOrReplaceItems(allBaseInfo.PGWs);
      await this.carrierDS.addOrReplaceItems(allBaseInfo.carriers);
      await this.printerDS.addOrReplaceItems(allBaseInfo.printers);
      await this.vehicleTypeDS.addOrReplaceItems(allBaseInfo.vehicleTypes);
      await this.packageSizeTypeDS.addOrReplaceItems(
        allBaseInfo.packageSizeTypes
      );
      await this.packageTypeDS.addOrReplaceItems(allBaseInfo.packageTypes);
      this.applicationDS.myInfo = JsonParser.deserializeObject(
        data.MyInfo,
        MyInfoDM
      );
    } catch (error) {}
  }
}
