import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import BillItemDM from './billItemDM';
import BillDM from './billDM';
import OperationCompleteDM from './operationCompleteDM';

@JsonObject('BillInformationDM')
export default class BillInformationDM extends Datamodel {
  @JsonProperty('BillItems', [BillItemDM], true) billItems: BillItemDM[] = [];
  @JsonProperty('Bill', BillDM, true) bill: BillDM | undefined = undefined;
  @JsonProperty('OperationComplete', OperationCompleteDM, true)
  operationComplete: OperationCompleteDM | undefined = undefined;
}
