import { JsonObject, JsonProperty } from 'json2typescript';
import OfficeConverter from '../convertors/officeConverter';
import OfficeDM from '../officeDM';

@JsonObject('MinimalStationDM')
export default class MinimalStationDM {
  @JsonProperty('Office', OfficeDM, true) office: OfficeDM | undefined =
    undefined;
  @JsonProperty('StopTime', String, true) stopTime = '';
}
