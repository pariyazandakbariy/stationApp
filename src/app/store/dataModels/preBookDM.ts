import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import OfficeConverter from './convertors/officeConverter';
import OfficeDM from './officeDM';
import PackageInfoDM from './packageInfoDM';

@JsonObject('PreBookDM')
export default class PreBookDM extends Datamodel {
  @JsonProperty('OriginCityCode', String, true) override id = '';
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOfficeCode', OfficeConverter, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationOfficeCode', OfficeConverter, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('PickupPointType', String, true) pickupPointType = '';
  @JsonProperty('DeliveryPointType', String, true) deliveryPointType = '';
  @JsonProperty('PackagesInfo', [PackageInfoDM], true)
  packagesInfo: PackageInfoDM[] = [];
  @JsonProperty('MarketerCommissionAmount', Number, true)
  marketerCommissionAmount = 0;
  @JsonProperty('PackingFeeAmount', Number, true) packingFeeAmount = 0;
  @JsonProperty('UnknownCourierAmount', Number, true) unknownCourierAmount = 0;
  @JsonProperty('InsuranceAmount', Number, true) insuranceAmount = 0;
}
