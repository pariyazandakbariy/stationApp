import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import ExceptionTypeConverter from './convertors/exceptionTypeConvertor';
import PackageSizeTypeConverter from './convertors/packageSizeTypeConvertor';
import ExceptionTypeDM from './exceptionTypeDM';
import PackageSizeTypeDM from './packageSizeTypeDM';
import PackageTypeDM from './packageTypeDM';

class PackageSize {
  @JsonProperty('X', String, true) x = '';
  @JsonProperty('Y', String, true) y = '';
  @JsonProperty('Z', String, true) z = '';
}

@JsonObject('PackageInfoDM')
export default class PackageInfoDM extends Datamodel {
  @JsonProperty('PackageTypeCode', PackageSizeTypeConverter, true)
  packageType: PackageTypeDM | undefined = undefined;
  @JsonProperty('PackageSize', PackageSize, true) packageSize: PackageSize =
    new PackageSize();
  @JsonProperty('PackageSizeTypeCode', PackageSizeTypeConverter, true)
  packageSizeType: PackageSizeTypeDM | undefined = undefined;
  @JsonProperty('PackageWeight', String, true) packageWeight = '';
  @JsonProperty('ExceptionTypeCode', ExceptionTypeConverter, true)
  exceptionType: ExceptionTypeDM | undefined = undefined;
  @JsonProperty('QTY', String, true) QTY = '1';
}
