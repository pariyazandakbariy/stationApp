import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('AccountReportDM')
export default class AccountReportDM extends Datamodel {
  @JsonProperty('AccountCode', String) accountCode = '';
  @JsonProperty('AccountTransactionID', Number, true) accountTransactionID = 0;
  @JsonProperty('Amount', Number, true) amount = 0;
  @JsonProperty('Balance', Number, true) balance = 0;
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('Description', String, true) description = '';
  @JsonProperty('RefCode', String, true) refCode = '';
  @JsonProperty('RefType', String, true) refType = '';
  @JsonProperty('TransactionDateTime', String, true) transactionDateTime = '';
}
