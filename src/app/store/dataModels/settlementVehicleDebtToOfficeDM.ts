import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('SettlementVehicleDebtToOfficeDM')
export default class SettlementVehicleDebtToOfficeDM extends Datamodel {
  @JsonProperty('VehicleCode', Number) vehicleCode = 0;
  @JsonProperty('Amount', Number, true) amount = 0;
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('PaymentDate', String, true) paymentDate = '';
  @JsonProperty('Description', String, true) description = '';
  @JsonProperty('ReceiptNo', String, true) receiptNo = '';
}
