import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import BillStatusConverter from './convertors/billStatusConverter';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import OfficeDM from './officeDM';

@JsonObject('SalesReportDM')
export default class SalesReportDM extends Datamodel {
  @JsonProperty('BillID', String, true) override id = '';
  @JsonProperty('BillID', String, true) billCode = '';
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;

  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true) destinationOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('ItemNo', Number, true) itemNo = 0;
  @JsonProperty('BillDateTime', String, true) billDateTime = '';
  @JsonProperty('TotalPrice', Number, true) totalPrice = 0;
  @JsonProperty('BillStatus', BillStatusConverter, true) billStatus:
    | { status: string; statusName: string }
    | undefined = undefined;
  @JsonProperty('OperationCompleted', Boolean, true) operationCompleted = false;
  @JsonProperty('MasterBill', Boolean, true) masterBill = false;
}
