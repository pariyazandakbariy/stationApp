import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('StateDM')
export default class StateDM extends Datamodel {
  @JsonProperty('CountryStateID', String, true) override id = '';
  @JsonProperty('CountryStateID', String, true) countryStateID = '';
  @JsonProperty('CountryCode', String, true) countryCode = '';
  @JsonProperty('StateName_EN', String, true) stateNameEn = '';
  @JsonProperty('StateName_FA', String, true) stateNameFa = '';
}
