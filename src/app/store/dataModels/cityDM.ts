import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('CityDM')
export default class CityDM extends Datamodel {
  @JsonProperty('CityID', String, true) override id = '';
  @JsonProperty('CityID', String, true) cityId = '';
  @JsonProperty('CountryCode', String, true) countryCode = '';
  @JsonProperty('CountryStateCode', String, true) countryStateCode = '';
  @JsonProperty('StateName_FA', String, true) stateNameFa = '';
  @JsonProperty('CityName_FA', String, true) cityNameFa = '';
  @JsonProperty('DomesticCity', Boolean, true) domesticCity = false;
  @JsonProperty('DoorService', Boolean, true) doorService = false;
  @JsonProperty('Active', Boolean, true) active = false;
}
