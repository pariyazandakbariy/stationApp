import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('MinimalUserDM')
export default class MinimalUserDM {
  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('UserCode', String, true) userCode = '';
  @JsonProperty('LastName', String, true) lastName = '';
}
