import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('PrinterDM')
export default class PrinterDM extends Datamodel {
  @JsonProperty('OfficePrinterID', Number, true) override id = 0;
  @JsonProperty('OfficePrinterID', Number, true) officePrinterID = 0;
  @JsonProperty('PrinterType', String, true) type = '';
  @JsonProperty('PrinterName', String, true) name = '';
  @JsonProperty('Channel', String, true) channel = '';
  @JsonProperty('Brand', String, true) brand = '';
  @JsonProperty('Model', String, true) model = '';
  @JsonProperty('PrinterNo', Number, true) printerNo = 0;
  @JsonProperty('DriverAddress', String, true) driverAddress = '';
}
