import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
@JsonObject('OfficeDM')
export default class OfficeDM extends Datamodel {
  @JsonProperty('OfficeID', String, true) override id = '';
  @JsonProperty('OfficeID', String, true) private myOfficeId = '';
  @JsonProperty('OfficeCode', String, true) private officeCode = '';

  @JsonProperty('OfficeType', String, true) officeType = '';
  @JsonProperty('OfficeName', String, true) officeName = '';
  @JsonProperty('CityCode', CityConverter, true) city: CityDM | undefined =
    undefined;
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('Ability_Accept', Boolean, true) abilityAccept = false;
  @JsonProperty('Ability_Delivery', Boolean, true) abilityDelivery = false;
  @JsonProperty('Ability_Depot', Boolean, true) abilityDepot = false;
  @JsonProperty('PostalAddress_FA', String, true) postalAddressFa = '';
  @JsonProperty('PostalAddress_EN', String, true) postalAddressEn = '';
  @JsonProperty('ControlNote', String, true) controlNote = '';

  get officeId() {
    return this.officeCode.length > 0 ? this.officeCode : this.myOfficeId;
  }

  set officeId(officeId: string) {
    this.officeCode = officeId;
    this.myOfficeId = officeId;
  }
}
