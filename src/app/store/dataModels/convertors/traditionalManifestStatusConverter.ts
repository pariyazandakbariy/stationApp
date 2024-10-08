import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import CityDM from '../cityDM';
import { CityDS } from '../../dataStore/cityDS';

@JsonConverter
export default class TraditionalManifestStatusConverter
  implements JsonCustomConvert<{ status: string; statusName: string }>
{
  serialize(data: { status: string; statusName: string }): any {
    return data;
  }
  deserialize(data: string): { status: string; statusName: string } {
    if (data === 'REGISTERED') {
      return { status: data, statusName: 'در انتظار' };
    } else if (data === 'PROCESSED') {
      return { status: data, statusName: 'پردازش شده' };
    } else {
      return { status: data, statusName: 'باطل شده' };
    }
  }
}
