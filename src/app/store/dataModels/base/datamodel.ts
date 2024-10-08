import { JsonObject } from 'json2typescript';
import { JsonParser } from 'src/app/utils/jsonparser';

@JsonObject('Datamodel')
export default class Datamodel {
  __class: string;
  id: any;

  constructor() {
    this.__class = this.constructor.name;
  }

  public serialize() {
    return JsonParser.serializeObject(this);
  }

  public isEmpty() {
    return Object.values(this).every((el) => el === undefined);
  }
}
