import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('TraditionalManifestItemDM')
export default class TraditionalManifestItemDM {
  @JsonProperty('TraditionalManifestItemID', Number, true)
  traditionalManifestId = 0;
  @JsonProperty('BillNumber', String, true) billNumber = '';
  @JsonProperty('BillDate', String, true) billDate = '';
  @JsonProperty('ServiceCode', Number, true) serviceCode = 0;
  @JsonProperty('ReceiverFullName', String, true) receiverFullName = '';
  @JsonProperty('ReceiverMobilePhone', String, true) receiverMobilePhone = '';
  @JsonProperty('ItemCount', Number, true) itemCount = 0;
  @JsonProperty('Description', String, true) description = '';
  @JsonProperty('PriceToCollectAmount', Number, true) priceToCollectAmount = 0;
  @JsonProperty('IssuerUserCode', String, true) issuerUserCode = '';
  @JsonProperty('NewBillCode', String, true) newBillCode = '';
  @JsonProperty('TraditionalManifestCode', Number, true)
  traditionalManifestCode = 0;
  @JsonProperty('Processed', Boolean, true) processed = false;

  @JsonProperty('CityServicesAmount', Number, true) cityServicesAmount = 0;
  @JsonProperty('ExtraServicesAmount', Number, true) extraServicesAmount = 0;
  @JsonProperty('TransitServicesAmount', Number, true)
  transitServicesAmount = 0;
  @JsonProperty('VAT', Number, true) vat = 0;
  @JsonProperty('PrepaymentAmount', Number, true) prepaymentAmount = 0;
}
