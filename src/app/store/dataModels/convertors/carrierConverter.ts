import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import CarrierDM from '../carrierDM';
import { CarrierDS } from '../../dataStore/carrierDS';

@JsonConverter
export default class CarrierConverter implements JsonCustomConvert<CarrierDM> {
  serialize(data: CarrierDM): any {
    return data;
  }
  deserialize(data: string): CarrierDM {
    const carrierDS = AppInjector.get(CarrierDS);
    const carriers = carrierDS.items;
    const index = carriers.findIndex((carrier) => carrier.id === data);
    return carriers[index];
  }
}
