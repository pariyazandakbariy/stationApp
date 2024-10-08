import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export default class RegisterConverter implements JsonCustomConvert<any> {
  serialize(data: string): any {
    return data;
  }
  deserialize(data: string): any {
    const items = data.split('-');
    const register = {
      columnOne: items[0],
      columnTwo: items[1],
      columnThree: items[2],
      columnFour: items[3],
    };
    return register;
  }
}
