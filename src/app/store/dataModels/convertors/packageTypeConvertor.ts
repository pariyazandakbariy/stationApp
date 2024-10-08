import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import PackageTypeDM from '../packageTypeDM';
import { PackageTypeDS } from '../../dataStore/packageTypeDS';

@JsonConverter
export default class PackageTypeConverter
  implements JsonCustomConvert<PackageTypeDM>
{
  serialize(data: PackageTypeDM): any {
    return data;
  }
  deserialize(data: string): PackageTypeDM {
    const packageTypeDS = AppInjector.get(PackageTypeDS);
    const packageTypes = packageTypeDS.items;
    const index = packageTypes.findIndex(
      (packageType) => packageType.packageTypeID === data
    );
    return packageTypes[index];
  }
}
