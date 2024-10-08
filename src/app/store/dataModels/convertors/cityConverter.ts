import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import CityDM from '../cityDM';
import { CityDS } from '../../dataStore/cityDS';

@JsonConverter
export default class CityConverter implements JsonCustomConvert<CityDM> {
  serialize(data: CityDM): any {
    return data;
  }
  deserialize(data: string): CityDM {
    const cityDS = AppInjector.get(CityDS);
    const cities = cityDS.items;
    const index = cities.findIndex((city) => city.id === data);
    return cities[index];
  }
}
