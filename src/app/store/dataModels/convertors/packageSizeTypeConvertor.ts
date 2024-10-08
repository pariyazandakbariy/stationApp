import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import PackageTypeDM from '../packageTypeDM';
import { PackageTypeDS } from '../../dataStore/packageTypeDS';
import PackageSizeTypeDM from '../packageSizeTypeDM';
import { PackageSizeTypeDS } from '../../dataStore/packageSizeTypeDS';

@JsonConverter
export default class PackageSizeTypeConverter
  implements JsonCustomConvert<PackageSizeTypeDM>
{
  serialize(data: PackageSizeTypeDM): any {
    return data;
  }
  deserialize(data: string): PackageSizeTypeDM {
    const packageSizeTypeDS = AppInjector.get(PackageSizeTypeDS);
    const packageSizeTypes = packageSizeTypeDS.items;
    const index = packageSizeTypes.findIndex(
      (packageSizeType) => packageSizeType.packageTypeSizeID === data
    );
    return packageSizeTypes[index];
  }
}
