import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('ProfileAddressDM')
export default class ProfileAddressDM extends Datamodel {
  @JsonProperty('ProfileAddressID', Number, true) profileAddressID = '';
  @JsonProperty('ProfileCode', Number, true) profileCode = 0;
  @JsonProperty('ProfileAddressTitle', String, true) profileAddressTitle = '';
  @JsonProperty('FullName', String, true) fullName = '';
  @JsonProperty('PostalAddress', String, true) postalAddress = '';
  @JsonProperty('PostalCode', String, true) postalCode = '';
  @JsonProperty('UnitNumber', String, true) unitNumber = '';
  @JsonProperty('BuildingNumber', String, true) buildingNumber = '';
  @JsonProperty('GeoLocation', String, true) geoLocation = '';
  @JsonProperty('MobilePhone', String, true) mobilePhone = '';
  @JsonProperty('address', String, true) address = '';
}
