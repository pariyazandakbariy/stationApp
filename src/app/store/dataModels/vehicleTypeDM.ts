import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('VehicleTypeDM')
export default class VehicleTypeDM extends Datamodel {
  @JsonProperty('VehicleTypeID', String, true) override id = '';
  @JsonProperty('VehicleTypeID', String, true) vehicleTypeId = '';
  @JsonProperty('VehicleTypeName_EN', String, true) vehicleTypeNameEn = '';
  @JsonProperty('VehicleTypeName_FA', String, true) vehicleTypeNameFa = '';
}
