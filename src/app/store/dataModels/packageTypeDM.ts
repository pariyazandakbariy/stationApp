import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('PackageTypeDM')
export default class PackageTypeDM extends Datamodel {
  @JsonProperty('PackageTypeID', String, true) override id = '';
  @JsonProperty('Active', Boolean, true) active = false;
  @JsonProperty('PackageTypeID', String, true) packageTypeID = '';
  @JsonProperty('PackageTypeName_EN', String, true) packageTypeName_EN = '';
  @JsonProperty('PackageTypeName_FA', String, true) packageTypeName_FA = '';
  @JsonProperty('SortOrder', Number, true) sortOrder = 0;
}
