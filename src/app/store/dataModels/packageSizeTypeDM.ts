import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('PackageSizeTypeDM')
export default class PackageSizeTypeDM extends Datamodel {
  @JsonProperty('PackageTypeSizeID', String, true) override id = '';
  @JsonProperty('Active', Boolean, true) active = false;
  @JsonProperty('ManualDimensions', Boolean, true) manualDimensions = false;
  @JsonProperty('PackageTypeCode', String, true) packageTypeCode = '';
  @JsonProperty('PackageTypeSizeID', String, true) packageTypeSizeID = '';
  @JsonProperty('PackageTypeSizeName_EN', String, true) packageTypeSizeName_EN =
    '';
  @JsonProperty('PackageTypeSizeName_FA', String, true) packageTypeSizeName_FA =
    '';
  @JsonProperty('SortOrder', Number, true) sortOrder = 0;
  @JsonProperty('X', Number, true) x = 0;
  @JsonProperty('Y', Number, true) y = 0;
  @JsonProperty('Z', Number, true) z = 0;
}
