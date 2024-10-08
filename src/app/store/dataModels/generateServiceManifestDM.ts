import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import ServiceManifestDM from './serviceManifestDM';

@JsonObject('GenerateServiceManifestDM')
export default class GenerateServiceManifestDM extends Datamodel {
  @JsonProperty('ManifestId', Number, true) manifestId = 0;
  @JsonProperty('ServiceManifests', [ServiceManifestDM], true)
  serviceManifests: ServiceManifestDM[] = [];
}
