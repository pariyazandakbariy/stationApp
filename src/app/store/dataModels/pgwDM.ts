import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('PgwDM')
export default class PgwDM extends Datamodel {
  @JsonProperty('baseCityCode', String, true) baseCityCode = '';
  @JsonProperty('channels', String, true) channels = '';
  @JsonProperty('commissionFixed', Number, true) commissionFixed = 0;
  @JsonProperty('commissionPercent', Number, true) commissionPercent = 0;
  @JsonProperty('description', String, true) description = '';
  @JsonProperty('enabled', Boolean, true) enabled = false;
  @JsonProperty('extraInfo', String, true) extraInfo = '';
  @JsonProperty('history', String, true) history = '';
  @JsonProperty('integrityCode', String, true) integrityCode = '';
  @JsonProperty('merchantTerminalID', String, true) merchantTerminalID = '';
  @JsonProperty('pGCommissionPercent', Number, true) pGCommissionPercent = 0;
  @JsonProperty('pGWName', String, true) pGWName = '';
  @JsonProperty('pGWPassword', String, true) pGWPassword = '';
  @JsonProperty('pGWUserName', String, true) pGWUserName = '';
  @JsonProperty('paymentMethod', String, true) paymentMethod = '';
  @JsonProperty('privateKey', String, true) privateKey = '';
  @JsonProperty('refundSupport', Boolean, true) refundSupport = false;
  @JsonProperty('salesSupport', Boolean, true) salesSupport = false;
  @JsonProperty('terminalCode', String, true) terminalCode = '';
}
