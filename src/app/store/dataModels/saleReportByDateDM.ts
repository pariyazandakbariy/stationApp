import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import BillStatusConverter from './convertors/billStatusConverter';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import OfficeDM from './officeDM';

@JsonObject('SaleReportByDateDM')
export default class SaleReportByDateDM extends Datamodel {
  @JsonProperty('BillID', String, true) override id = '';
  @JsonProperty('BillID', String, true) billCode = '';
  @JsonProperty('BillDateTime', String, true) billDateTime = '';
  @JsonProperty('BillStatus', BillStatusConverter, true) billStatus:
    | { status: string; statusName: string }
    | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true) destinationOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('ItemNo', Number, true) itemNo = 0;
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('TotalPrice', Number, true) totalPrice = 0;
}
