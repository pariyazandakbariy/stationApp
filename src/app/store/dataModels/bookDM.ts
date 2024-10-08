import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import OfficeConverter from './convertors/officeConverter';
import OfficeDM from './officeDM';

class Receiver {
  @JsonProperty('ProfileAddressCode', String, true) profileAddressCode = '';
  @JsonProperty('AddressTitle', String, true) addressTitle = '';
  @JsonProperty('FullName', String, true) fullName = '';
  @JsonProperty('Mobile', String, true) mobile = '';
  @JsonProperty('Address', String, true) address = '';
  @JsonProperty('PostalCode', String, true) postalCode = '';
  @JsonProperty('BuildingNo', String, true) buildingNo = '';
  @JsonProperty('UnitNo', String, true) unitNo = '';
  @JsonProperty('GeoLocation', String, true) geoLocation = '';
  @JsonProperty('StationOfficeCode', OfficeConverter, true)
  office: OfficeDM | undefined = undefined;
}

class Sender {
  @JsonProperty('ProfileAddressCode', String, true) profileAddressCode = '';
  @JsonProperty('AddressTitle', String, true) addressTitle = '';
  @JsonProperty('FullName', String, true) fullName = '';
  @JsonProperty('NationalCode', String, true) nationalCode = '';
  @JsonProperty('Mobile', String, true) mobile = '';
  @JsonProperty('Address', String, true) address = '';
  @JsonProperty('PostalCode', String, true) postalCode = '';
  @JsonProperty('BuildingNo', String, true) buildingNo = '';
  @JsonProperty('UnitNo', String, true) unitNo = '';
  @JsonProperty('GeoLocation', String, true) geoLocation = '';
  @JsonProperty('StationOfficeCode', OfficeConverter, true)
  office: OfficeDM | undefined = undefined;
}

@JsonObject('BookDM')
export default class BookDM extends Datamodel {
  @JsonProperty('PreBookCode', String, true) preBookCode = '';
  @JsonProperty('FreightQuoteNo', String, true) freightQuoteNo = '';
  @JsonProperty('Sender', Sender, true) sender: Sender = new Sender();
  @JsonProperty('Receiver', Receiver, true) receiver: Receiver = new Receiver();
}
