import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
@JsonObject('DriverCourierDM')
export default class DriverCourierDM extends Datamodel {
  @JsonProperty('DriverID', Number, true) override id = 0;
  @JsonProperty('DriverID', Number, true) driverId = 0; //چرا DriverCourierID نیومده

  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('LastName', String, true) lastName = '';
  @JsonProperty('Gender', String, true) gender = '';
  @JsonProperty('NationalityCountryCode', String, true) nationalityCountryCode =
    '';
  @JsonProperty('NationalCode', String, true) nationalCode = '';
  @JsonProperty('MobilePhone', String, true) mobilePhone = '';

  get driverCourierFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
