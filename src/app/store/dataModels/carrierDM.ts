import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('CarrierDM')
export default class CarrierDM extends Datamodel {
  @JsonProperty('CarrierID', String, true) override id = '';
  @JsonProperty('CarrierID', String, true) carrierId = '';
  @JsonProperty('CarrierName_EN', String, true) carrierNameEn = '';
  @JsonProperty('CarrierName_FA', String, true) carrierNameFa = '';
}
