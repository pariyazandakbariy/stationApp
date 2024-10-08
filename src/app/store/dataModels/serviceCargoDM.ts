import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import MinimalServiceDM from './minimalDM/minimalServiceDM';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import MinimalDriverDM from './minimalDM/minimalDriverDM';
import OfficeDM from './officeDM';

@JsonObject('ServiceCargoDM')
export default class ServiceCargoDM extends Datamodel {
  @JsonProperty('ItemUniqueKey', String) override id = '';
  @JsonProperty('BillCode', String) billCode = '';
  @JsonProperty('BillDateTime', String) billDateTime = '';
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true) destinationOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('Height', Number, true) height = 0;
  @JsonProperty('ItemNo', Number, true) itemNo = 0;
  @JsonProperty('Length', Number, true) length = 0;
  @JsonProperty('MasterItem', Boolean, true) masterItem = false;
  @JsonProperty('MinutesFromIssueTime', Number, true) minutesFromIssueTime = 0;
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('ReceiverName', String, true) receiverName = '';
  @JsonProperty('ServiceMinimal', MinimalServiceDM, true) serviceMinimal:
    | MinimalServiceDM
    | undefined = undefined;
  @JsonProperty('TotalItemsOfBill', Number, true) totalItemsOfBill = 0;
  @JsonProperty('Weight', Number, true) weight = 0;
  @JsonProperty('Width', Number, true) width = 0;
}
