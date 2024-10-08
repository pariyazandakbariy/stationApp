import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import ExceptionTypeDM from './exceptionTypeDM';
import PgwDM from './pgwDM';
import PackageTypeDM from './packageTypeDM';
import PackageSizeTypeDM from './packageSizeTypeDM';
import StateDM from './stateDM';
import MyInfoDM from './myInfoDM';
import CarrierDM from './carrierDM';
import PrinterDM from './printerDM';
import VehicleTypeDM from './vehicleTypeDM';

@JsonObject('BaseInfoDM')
export default class BaseInfoDM extends Datamodel {
  @JsonProperty('CityList', [CityDM], true) cities: CityDM[] = [];
  @JsonProperty('CountryStateList', [StateDM], true)
  countryStates: StateDM[] = [];
  @JsonProperty('ExceptionTypes', [ExceptionTypeDM], true)
  exceptionTypes: ExceptionTypeDM[] = [];
  @JsonProperty('MyInfo', MyInfoDM, true) myInfo: MyInfoDM | undefined =
    undefined;
  @JsonProperty('PGWList', [PgwDM], true) PGWs: PgwDM[] = [];
  @JsonProperty('PackageSizeTypes', [PackageSizeTypeDM], true)
  packageSizeTypes: PackageSizeTypeDM[] = [];
  @JsonProperty('PackageTypes', [PackageTypeDM], true)
  packageTypes: PackageTypeDM[] = [];
  @JsonProperty('CarrierList', [CarrierDM], true)
  carriers: CarrierDM[] = [];
  @JsonProperty('PrinterList', [PrinterDM], true)
  printers: PrinterDM[] = [];
  @JsonProperty('VehicleTypeList', [VehicleTypeDM], true)
  vehicleTypes: VehicleTypeDM[] = [];
}
