import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import OfficeDM from './officeDM';
import ServiceManifestDM from './serviceManifestDM';
import ServiceDM from './serviceDM';

@JsonObject('ManifestInformationDM')
export default class ManifestInformationDM extends Datamodel {
  @JsonProperty('ManifestId', Number, true) override id = 0;
  @JsonProperty('ManifestId', Number, true) manifestId = 0;
  @JsonProperty('ServiceManifests', [ServiceManifestDM], true)
  serviceManifests: ServiceManifestDM[] = [];
  @JsonProperty('ManifestDateTime', String, true) manifestDateTime = '';
  @JsonProperty('IssuerUserCode', String, true) issuerUserCode = '';
  @JsonProperty('Service', ServiceDM, true) service: ServiceDM | undefined =
    undefined;
  @JsonProperty('OriginCity', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationOffice', OfficeDM, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('DestinationCity', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;

  get manifestItemLength() {
    return this.serviceManifests.length;
  }
}
