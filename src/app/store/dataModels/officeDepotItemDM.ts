import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import OfficeDM from './officeDM';
@JsonObject('OfficeDepotItemDM')
export default class OfficeDepotItemDM extends Datamodel {
  @JsonProperty('ItemUniqueKey', String, true) override id = '';
  @JsonProperty('ItemUniqueKey', String, true) itemUniqueKey = '';
  @JsonProperty('BillCode', String, true) billCode = '';
  @JsonProperty('ItemNo', Number, true) itemNo = 0;
  @JsonProperty('MasterItem', Boolean, true) isMasterBill = false;
  @JsonProperty('BillDateTime', String, true) billDateTime = '';
  @JsonProperty('LastActionDateTime', String, true) lastActionDateTime = '';
  @JsonProperty('OriginCityCode', CityConverter, true)
  originCity: CityDM | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true)
  originOffice: OfficeDM | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('MinutesFromIssueTime', Number, true) minutesFromIssueTime = 0;
  @JsonProperty('ReceiverName', String, true) receiverName = '';
  @JsonProperty('SenderName', String, true) senderName = '';
  @JsonProperty('Weight', Number, true) weight = 0;
  @JsonProperty('Length', Number, true) length = 0;
  @JsonProperty('Width', Number, true) width = 0;
  @JsonProperty('Height', Number, true) height = 0;
  @JsonProperty('TotalItemsOfBill', Number, true) totalItemsOfBill = 0;
  @JsonProperty('IsLeftPayment', Boolean, true) isLeftPayment = false;
}
