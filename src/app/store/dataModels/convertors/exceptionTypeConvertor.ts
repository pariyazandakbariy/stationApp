import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import PackageTypeDM from '../packageTypeDM';
import { PackageTypeDS } from '../../dataStore/packageTypeDS';
import PackageSizeTypeDM from '../packageSizeTypeDM';
import { PackageSizeTypeDS } from '../../dataStore/packageSizeTypeDS';
import ExceptionTypeDM from '../exceptionTypeDM';
import { ExceptionTypeDS } from '../../dataStore/exceptionTypeDS';

@JsonConverter
export default class ExceptionTypeConverter
  implements JsonCustomConvert<ExceptionTypeDM>
{
  serialize(data: ExceptionTypeDM): any {
    return data;
  }
  deserialize(data: number): ExceptionTypeDM {
    const exceptionTypeDS = AppInjector.get(ExceptionTypeDS);
    const exceptionTypes = exceptionTypeDS.items;
    const index = exceptionTypes.findIndex(
      (exceptionType) => exceptionType.exceptionTypeID === +data
    );
    return exceptionTypes[index];
  }
}
