import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { Gender } from 'src/app/utils/constants';

@JsonConverter
export default class GenderConverter implements JsonCustomConvert<any> {
  serialize(data: any): any {
    return data;
  }
  deserialize(data: string): any {
    const gender = Gender;
    const index = gender.findIndex((item) => item.value === data);
    return gender[index];
  }
}
