import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import ProfileAddressDM from './profileAddressDM';
import MinimalUserDM from './minimalDM/minimalUserDM';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import OfficeDM from './officeDM';
import BillStatusConverter from './convertors/billStatusConverter';

@JsonObject('BillDM')
export default class BillDM extends Datamodel {
  @JsonProperty('BillID', String) billCode = '';
  @JsonProperty('IssuerOffice', OfficeDM, true) issuerOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('IssuerUser', MinimalUserDM, true) issuerUser:
    | MinimalUserDM
    | undefined = undefined;
  @JsonProperty('SenderProfileCode', Number, true) senderProfileCode = 0;
  @JsonProperty('ReceiverProfileCode', Number, true) receiverProfileCode = 0;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true) destinationOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('SenderProfileAddress', ProfileAddressDM, true)
  senderProfileAddress: ProfileAddressDM | undefined = undefined;
  @JsonProperty('ReceiverProfileAddress', ProfileAddressDM, true)
  receiverProfileAddress: ProfileAddressDM | undefined = undefined;
  @JsonProperty('PickupPointType', String, true) pickupPointType = '';
  @JsonProperty('DeliveryPointType', String, true) deliveryPointType = '';
  @JsonProperty('ReceiverFullName', String, true) receiverFullName = '';
  @JsonProperty('SenderFullName', String, true) senderFullName = '';
  @JsonProperty('SenderMobilePhone', String, true) senderMobilePhone = '';
  @JsonProperty('ReceiverMobilePhone', String, true) receiverMobilePhone = '';
  @JsonProperty('JourneyType', String, true) journeyType = '';
  @JsonProperty('RouteOfficeCodes', String, true) routeOfficeCodes = '';
  @JsonProperty('IssueSolarDate', String, true) issueSolarDate = '';
  @JsonProperty('IsVoidable', Boolean, true) isVoidable = false;
  @JsonProperty('CanCompleteOperation', Boolean, true) canCompleteOperation =
    false;
  @JsonProperty('IssueADDate', String, true) issueADDate = '';
  @JsonProperty('IssueTime', String, true) issueTime = '';
  @JsonProperty('MasterBill', Boolean, true) masterBill = false;
  @JsonProperty('BillStatus', BillStatusConverter, true) billStatus:
    | { status: string; statusName: string }
    | undefined = undefined;
  @JsonProperty('ItemCount', Number, true) itemCount = '';
  @JsonProperty('OperationCompleted', Boolean, true) operationCompleted = '';
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('Freight', Number, true) freight = '';
  @JsonProperty('TotalPrice', Number, true) totalPrice = '';
  @JsonProperty('TotalCharges', Number, true) totalCharges = '';
  @JsonProperty('VAT', Number, true) vat = '';
  @JsonProperty('PrePayment', Number, true) prePayment = '';
  @JsonProperty('TotalPayments', Number, true) totalPayments = '';
  @JsonProperty('LeftPayment', Number, true) leftPayment = 0;
  @JsonProperty('DiscountCode', String, true) DiscountCode = '';
}
