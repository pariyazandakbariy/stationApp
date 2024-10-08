import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('RoleDM')
export class RoleDM extends Datamodel {
  @JsonProperty('access', String) access = '';
  @JsonProperty('bindRoleID', String, true) bindRoleID = '';
  @JsonProperty('roleID', String, true) roleID = '';
  @JsonProperty('title', String, true) title = '';
}

@JsonObject('UserDM')
export default class UserDM extends Datamodel {
  @JsonProperty('id', Number) override id: number = 0;
  @JsonProperty('enabled', Boolean, true) enabled = false;
  @JsonProperty('expireDate', String, true) expireDate = '';
  @JsonProperty('officeCode', String, true) officeCode = '';
  @JsonProperty('userFullName', String, true) userFullName = '';
  @JsonProperty('userID', String, true) userID = '';
  @JsonProperty('userMobileNumber', String, true) userMobileNumber = '';
  @JsonProperty('password', String, true) password = '';
}
