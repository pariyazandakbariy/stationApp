import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import { OfficeDS } from '../../dataStore/officeDS';
import OfficeDM from '../officeDM';

@JsonConverter
export default class OfficeConverter implements JsonCustomConvert<OfficeDM> {
  serialize(data: OfficeDM): any {
    return data;
  }
  deserialize(data: string): OfficeDM {
    const officeDS = AppInjector.get(OfficeDS);
    const offices = officeDS.items;
    const index = offices.findIndex((office) => office.id === data);
    return offices[index];
  }
}
