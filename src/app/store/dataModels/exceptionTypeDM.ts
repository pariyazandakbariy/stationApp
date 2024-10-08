import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('ExceptionTypeDM')
export default class ExceptionTypeDM extends Datamodel {
  @JsonProperty('ExceptionTypeID', Number, true) override id = 0;
  @JsonProperty('Active', Boolean, true) active = false;
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('ExceptionTypeID', Number, true) exceptionTypeID = 0;
  @JsonProperty('ExceptionTypeName_EN', String, true) exceptionTypeName_EN = '';
  @JsonProperty('ExceptionTypeName_FA', String, true) exceptionTypeName_FA = '';
  @JsonProperty('ExtraAmountPerKG', Number, true) extraAmountPerKG = 0;
  @JsonProperty('ExtraInfo', String, true) extraInfo = '';
  @JsonProperty('FixedAmount', Number, true) fixedAmount = 0;
  @JsonProperty('JourneyType', String, true) journeyType = '';
  @JsonProperty('MinimumAmount', Number, true) minimumAmount = 0;
  @JsonProperty('MinimumWeight', Number, true) minimumWeight = 0;
  @JsonProperty('PercentAmount', Number, true) percentAmount = 0;
}
