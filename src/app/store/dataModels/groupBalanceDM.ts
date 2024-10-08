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

@JsonObject('GroupBalanceDM')
export default class GroupBalanceDM extends Datamodel {
  @JsonProperty('Balance', Number, true) balance = 0;
  @JsonProperty('Description', String, true) description = '';
  @JsonProperty('RefCode', String, true) refCode = '';
  @JsonProperty('RefType', String, true) refType = '';
  @JsonProperty('TransactionDateTime', String, true) transactionDateTime = '';
}
