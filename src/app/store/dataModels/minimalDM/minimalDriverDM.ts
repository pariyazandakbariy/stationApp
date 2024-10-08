import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('MinimalDriverDM')
export default class MinimalDriverDM {
  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('LastName', String, true) lastName = '';
  @JsonProperty('DriverCode', Number, true) driverCode = 0;
  @JsonProperty('MobilePhone', String, true) driverMobilePhone = '';

  get driverFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
