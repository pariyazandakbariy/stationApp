import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import TraditionalManifestItemDM from './traditionalManifestItemDM';
import TraditionalManifestStatusConverter from './convertors/traditionalManifestStatusConverter';
import OfficeConverter from './convertors/officeConverter';
import OfficeDM from './officeDM';
import ServiceDM from './serviceDM';

@JsonObject('TraditionalManifestDM')
export default class TraditionalManifestDM extends Datamodel {
  @JsonProperty('TraditionalManifestID', Number, true) override id = 0;
  @JsonProperty('TraditionalManifestID', Number, true)
  traditionalManifestId = 0;
  @JsonProperty('TraditionalManifestItems', [TraditionalManifestItemDM], true)
  traditionalManifestItems: TraditionalManifestItemDM[] = [];
  @JsonProperty('ManifestDateTime', String, true) manifestDateTime = '';
  @JsonProperty('Service', ServiceDM, true) service: ServiceDM | undefined =
    undefined;
  @JsonProperty('ManifestNumber', String, true) manifestNumber = '';
  @JsonProperty('IncommingCargo', Boolean, true) incommingCargo = false;
  @JsonProperty('IncomeDateTime', String, true) incomeDateTime = '';
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOfficeCode', OfficeConverter, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationOfficeCode', OfficeConverter, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('ManifestStatus', TraditionalManifestStatusConverter, true)
  manifestStatus: { status: string; statusName: string } | undefined =
    undefined;

  get traditionalManifestItemLength(): number {
    return this.traditionalManifestItems.length;
  }
}
