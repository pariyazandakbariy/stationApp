import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import GenderConverter from './convertors/genderConverter';

@JsonObject('DriverDM')
export default class DriverDM extends Datamodel {
  @JsonProperty('DriverID', Number) override id = 0;
  @JsonProperty('DriverID', Number) driverId = 0;
  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('LastName', String, true) lastName = '';
  @JsonProperty('Gender', GenderConverter, true) gender: any = undefined;
  @JsonProperty('NationalityCountryCode', String, true) nationalityCountryCode =
    '';
  @JsonProperty('NationalCode', String, true) nationalCode = '';
  @JsonProperty('ExtraInfo', String, true) extraInfo = '';
  @JsonProperty('MobilePhone', String, true) mobilePhone = '';

  get driverFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
