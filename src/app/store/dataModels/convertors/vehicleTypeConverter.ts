import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import VehicleTypeDM from '../vehicleTypeDM';
import { VehicleTypeDS } from '../../dataStore/vehicleTypeDS';

@JsonConverter
export default class VehicleTypeConverter
  implements JsonCustomConvert<VehicleTypeDM>
{
  serialize(data: VehicleTypeDM): any {
    return data;
  }
  deserialize(data: string): VehicleTypeDM {
    const vehicleTypeDS = AppInjector.get(VehicleTypeDS);
    const vehicleTypes = vehicleTypeDS.items;
    const index = vehicleTypes.findIndex(
      (vehicleType) => vehicleType.id === data
    );
    return vehicleTypes[index];
  }
}
