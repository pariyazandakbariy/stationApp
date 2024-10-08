import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('RouteDM')
export default class RouteDM extends Datamodel {
  @JsonProperty('RouteID', Number, true) override id = 0;
  @JsonProperty('RouteID', Number, true) routeId = 0;
  @JsonProperty('OriginCityCode', String, true) originCityCode = '';
  @JsonProperty('OriginOfficeCode', String, true) originOfficeCode = '';
  @JsonProperty('DestinationCityCode', String, true) destinationCityCode = '';
  @JsonProperty('DestinationOfficeCode', String, true) destinationOfficeCode =
    '';
  @JsonProperty('VehicleTypeCode', String, true) vehicleTypeCode = '';
  @JsonProperty('DurationMinutes', Number, true) durationMinutes = 0;
  @JsonProperty('DistanceKM', Number, true) distanceKM = 0;
  @JsonProperty('AvailabilityGuarantiedTime_Minutes', Number, true)
  availabilityGuarantiedTimeMinutes = 0;
  @JsonProperty('Active', Boolean, true) active = false;
  @JsonProperty('ExtraInfo', String, true) extraInfo = '';
  @JsonProperty('History', String, true) history = '';
}
