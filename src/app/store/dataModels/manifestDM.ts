import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import ManifestStatusConverter from './convertors/manifestStatusConverter';
import OfficeDM from './officeDM';
import ServiceManifestDM from './serviceManifestDM';

@JsonObject('ManifestDM')
export default class ManifestDM extends Datamodel {
  @JsonProperty('ManifestId', Number, true) override id = 0;
  @JsonProperty('ManifestId', Number, true) manifestId = 0;
  @JsonProperty('ServiceManifests', [ServiceManifestDM], true)
  serviceManifests: ServiceManifestDM[] = [];
  @JsonProperty('ManifestDateTime', String, true) manifestDateTime = '';
  @JsonProperty('IssuerUserCode', String, true) issuerUserCode = '';
  @JsonProperty('ServiceCode', Number, true) serviceCode = 0;
  @JsonProperty('ManifestStatus', ManifestStatusConverter, true)
  manifestStatus: { status: string; statusName: string } | undefined =
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
