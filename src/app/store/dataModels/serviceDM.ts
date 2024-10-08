import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CarrierDM from './carrierDM';
import CityDM from './cityDM';
import CarrierConverter from './convertors/carrierConverter';
import CityConverter from './convertors/cityConverter';
import OfficeConverter from './convertors/officeConverter';
import VehicleTypeConverter from './convertors/vehicleTypeConverter';
import MinimalDriverDM from './minimalDM/minimalDriverDM';
import OfficeDM from './officeDM';
import VehicleTypeDM from './vehicleTypeDM';
import VehicleDM from './vehicleDM';

@JsonObject('ServiceDM')
export default class ServiceDM extends Datamodel {
  @JsonProperty('ServiceID', Number, true) override id = 0;
  @JsonProperty('ServiceID', Number, true) myServiceId = 0;
  @JsonProperty('ServiceCode', Number, true) myServiceCode = 0;
  @JsonProperty('ServiceNo', String, true) serviceNo = '';
  @JsonProperty('Vehicle', VehicleDM, true) vehicle: VehicleDM | undefined =
    undefined;
  @JsonProperty('VehicleTypeCode', VehicleTypeConverter, true) vehicleType:
    | VehicleTypeDM
    | undefined = undefined;
  @JsonProperty('OriginOffice', OfficeDM, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DurationMinutes', Number, true) durationMinutes = 0;
  @JsonProperty('Driver', MinimalDriverDM, true) driver:
    | MinimalDriverDM
    | undefined = undefined;
  @JsonProperty('ServiceScheduleCode', Number, true) serviceScheduleCode = 0;
  @JsonProperty('DestinationOffice', OfficeDM, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DepartureDateTime', String, true) departureDateTime = '';
  @JsonProperty('CarrierCode', CarrierConverter, true) carrier:
    | CarrierDM
    | undefined = undefined;
  @JsonProperty('ArrivalDateTime', String, true) arrivalDateTime = '';

  get serviceId() {
    return this.myServiceCode > 0 ? this.myServiceCode : this.myServiceId;
  }

  set serviceId(serviceId: number) {
    this.myServiceId = serviceId;
    this.myServiceCode = serviceId;
  }
}
