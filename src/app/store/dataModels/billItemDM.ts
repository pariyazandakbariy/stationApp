import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import ExceptionTypeConverter from './convertors/exceptionTypeConvertor';
import ExceptionTypeDM from './exceptionTypeDM';
import PackageTypeConverter from './convertors/packageTypeConvertor';
import PackageTypeDM from './packageTypeDM';

@JsonObject('BillItemDM')
export default class BillItemDM extends Datamodel {
  @JsonProperty('BillItemID', Number) billItemID = 0;
  @JsonProperty('ItemNo', Number, true) itemNo = 0;
  @JsonProperty('BillCode', String, true) billCode = '';
  @JsonProperty('Length', Number, true) length = 0;
  @JsonProperty('Width', Number, true) width = 0;
  @JsonProperty('Height', Number, true) height = 0;
  @JsonProperty('Weight', Number, true) weight = 0;
  @JsonProperty('Volume', Number, true) volume = 0;
  @JsonProperty('ItemFreight', Number, true) itemFreight = '';
  @JsonProperty('ItemTotalCharge', Number, true) itemTotalCharge = '';
  @JsonProperty('ExceptionTypeCode', ExceptionTypeConverter, true)
  exceptionType: ExceptionTypeDM | undefined = undefined;
  @JsonProperty('MasterBillCode', String, true) masterBillCode = '';
  @JsonProperty('QRCode', String, true) qrCode = '';
  @JsonProperty('PackageTypeCode', PackageTypeConverter, true) packageType:
    | PackageTypeDM
    | undefined = undefined;
}
