import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import ProfileAddressDM from './profileAddressDM';
import MinimalUserDM from './minimalDM/minimalUserDM';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import OfficeDM from './officeDM';
import BillStatusConverter from './convertors/billStatusConverter';

@JsonObject('OperationCompleteDM')
export default class OperationCompleteDM extends Datamodel {
  @JsonProperty('BillCode', String) billCode = '';
  @JsonProperty('CourierAmount', Number, true) courierAmount = 0;
  @JsonProperty('DaysInWareHouse', Number, true) daysInWareHouse = 0;
  @JsonProperty('DestinationChargeAmount', Number, true)
  destinationChargeAmount = 0;
  @JsonProperty('OfficeCode', String, true) officeCode = '';
  @JsonProperty('TotalPrice', Number, true) totalPrice = 0;
  @JsonProperty('VAT', Number, true) vat = 0;
  @JsonProperty('WareHouseCostAmount', Number, true) wareHouseCostAmount = 0;
  @JsonProperty('ReceiverPersonName', String, true) receiverPersonName = '';
  @JsonProperty('DeliveryDateTime', String, true) deliveryDateTime = '';
}
