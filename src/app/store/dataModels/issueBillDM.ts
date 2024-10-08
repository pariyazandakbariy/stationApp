import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import BillItemDM from './billItemDM';
import BillDM from './billDM';

@JsonObject('IssueBillDM')
export default class IssueBillDM extends Datamodel {
  @JsonProperty('BillItems', [BillItemDM], true) billItems: BillItemDM[] = [];
  @JsonProperty('Bill', BillDM, true) bill: BillDM | undefined = undefined;
}
