import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CarrierDM from './carrierDM';
import CityDM from './cityDM';
import CarrierConverter from './convertors/carrierConverter';
import CityConverter from './convertors/cityConverter';
import OfficeConverter from './convertors/officeConverter';
import VehicleTypeConverter from './convertors/vehicleTypeConverter';
import OfficeDM from './officeDM';
import VehicleTypeDM from './vehicleTypeDM';
import MinimalStationDM from './minimalDM/minimalStationDM';
import VehicleDM from './vehicleDM';

@JsonObject('GenerateServiceDM')
export default class GenerateServiceDM extends Datamodel {
  @JsonProperty('ServiceID', Number, true) override id: number = 0;
  @JsonProperty('ServiceID', Number, true) serviceId: number = 0;
  @JsonProperty('VehicleTypeCode', VehicleTypeConverter, true) vehicleType:
    | VehicleTypeDM
    | undefined = undefined;
  @JsonProperty('Vehicle', Number, true) vehicle: VehicleDM | undefined =
    undefined;
  @JsonProperty('CarrierCode', CarrierConverter, true) carrier:
    | CarrierDM
    | undefined = undefined;
  @JsonProperty('ServiceNo', String, true) serviceNo = '';
  @JsonProperty('FromDate', String, true) fromDate = '';
  @JsonProperty('ToDate', String, true) toDate = '';
  @JsonProperty('DepartureTime', String, true) departureTime = '';
  @JsonProperty('ArrivalTime', String, true) arrivalTime = '';
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOfficeCode', OfficeConverter, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationOfficeCode', OfficeConverter, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('DayOfWeek', String, true) dayOfWeek = '';
  @JsonProperty('MiddleStations', [MinimalStationDM], true)
  minimalStations: MinimalStationDM[] = [];
  @JsonProperty('DriverCode', Number, true) driverCode = 0;
}
