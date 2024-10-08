import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import OfficeDM from './officeDM';
@JsonObject('MyInfoDM')
export default class MyInfoDM extends Datamodel {
  @JsonProperty('MyInfoID', String, true) override id = '';
  @JsonProperty('UserID', String, true) userID = '';
  @JsonProperty('Office', OfficeDM, true) office: OfficeDM | undefined =
    undefined;
  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('LastName', String, true) lastName = '';
  @JsonProperty('EMail', String, true) email = '';
  @JsonProperty('CellPhone', String, true) cellPhone = '';
  @JsonProperty('Roles', String, true) roles = '';
  @JsonProperty('Enabled', Boolean, true) enabled = false;
  @JsonProperty('ExpireDate', String, true) expireDate = '';
  @JsonProperty('WorkingTimeStart', String, true) workingTimeStart = '';
  @JsonProperty('WorkingTimeUntil', String, true) workingTimeUntil = '';
  @JsonProperty('ExtraInfo', String, true) extraInfo = '';
  @JsonProperty('ChecksumHash', String, true) checksumHash = '';
}
