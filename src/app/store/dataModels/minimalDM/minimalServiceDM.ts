import { JsonObject, JsonProperty } from 'json2typescript';
import CarrierDM from '../carrierDM';
import CarrierConverter from '../convertors/carrierConvertor';
import MinimalDriverDM from './minimalDriverDM';

@JsonObject('MinimalServiceDM')
export default class MinimalServiceDM {
  @JsonProperty('ArrivalDateTime', String, true) arrivalDateTime = '';
  @JsonProperty('CarrierCode', CarrierConverter, true) carrier:
    | CarrierDM
    | undefined = undefined;
  @JsonProperty('DepartureDateTime', String, true) departureDateTime = '';
  @JsonProperty('Driver', MinimalDriverDM, true) driver:
    | MinimalDriverDM
    | undefined = undefined;
  @JsonProperty('ServiceCode', Number, true) serviceCode = 0;
  @JsonProperty('ServiceNo', String, true) serviceNo = '';
  @JsonProperty('VehicleTypeCode', String, true) vehicleTypeCode = '';
}
