import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import RegisterConverter from './convertors/registerConverter';
import CarrierConverter from './convertors/carrierConverter';
import VehicleTypeConverter from './convertors/vehicleTypeConverter';
import VehicleTypeDM from './vehicleTypeDM';
import CarrierDM from './carrierDM';

@JsonObject('VehicleDM')
export default class VehicleDM extends Datamodel {
  @JsonProperty('VehicleID', Number, true) override id = 0;
  @JsonProperty('VehicleID', Number, true) private _vehicleId = 0;
  @JsonProperty('VehicleCode', Number, true) private _vehicleCode = 0;
  @JsonProperty('VehicleTypeCode', VehicleTypeConverter, true) vehicleType:
    | VehicleTypeDM
    | undefined = undefined;
  @JsonProperty('CarrierCode', CarrierConverter, true) carrier:
    | CarrierDM
    | undefined = undefined;
  @JsonProperty('Register', String, true) register = '';
  @JsonProperty('Register', RegisterConverter, true) registerFormat = {
    columnOne: '',
    columnTwo: '',
    columnThree: '',
    columnFour: '',
  };
  @JsonProperty('OwnerFullName', String, true) ownerFullName = '';
  @JsonProperty('OwnerMobilePhone', String, true) ownerMobilePhone = '';
  @JsonProperty('Courier', Boolean, true) courier = false;
  @JsonProperty('Transporter', Boolean, true) transporter = false;

  get vehicleId() {
    return this._vehicleId > 0 ? this._vehicleId : this._vehicleCode;
  }
  set vehicleId(id: number) {
    this._vehicleId = id;
    this._vehicleCode = id;
  }

  get pelak() {
    if (this.register) {
      return (
        ' ایران ' +
        this.registerFormat.columnFour +
        ' ' +
        this.registerFormat.columnThree +
        ' ' +
        this.registerFormat.columnTwo +
        ' ' +
        this.registerFormat.columnOne
      );
    } else {
      return '';
    }
  }
}
