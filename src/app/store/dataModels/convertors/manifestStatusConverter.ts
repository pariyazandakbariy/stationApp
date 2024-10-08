import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export default class ManifestStatusConverter
  implements JsonCustomConvert<{ status: string; statusName: string }>
{
  serialize(data: { status: string; statusName: string }): any {
    return data;
  }
  deserialize(data: string): { status: string; statusName: string } {
    if (data === 'I') {
      return { status: data, statusName: 'صادر شده' };
    } else if (data === 'V') {
      return { status: data, statusName: 'باطل شده' };
    } else {
      return { status: data, statusName: '' };
    }
  }
}
