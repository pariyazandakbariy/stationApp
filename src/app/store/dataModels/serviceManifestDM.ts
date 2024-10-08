import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('ServiceManifestDM')
export default class ServiceManifestDM extends Datamodel {
  @JsonProperty('BillCode', String, true) override id = '';
  @JsonProperty('BillCode', String, true) billCode = '';
  @JsonProperty('ServiceFreightShare', Number, true) serviceFreightShare = 0;
  @JsonProperty('FreightCollectAmount', Number, true) freightCollectAmount = 0;
  @JsonProperty('PayToServiceAmount', Number, true) payToServiceAmount = 0;
  @JsonProperty('ReceiveFromServiceAmount', Number, true)
  receiveFromServiceAmount = 0;
  @JsonProperty('ManifestItemsCount', Number, true) manifestItemsCount = 0;
  @JsonProperty('TotalItemsCount', Number, true) totalItemsCount = 0;
}
