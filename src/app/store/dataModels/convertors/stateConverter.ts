import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from 'src/app/app.module';
import StateDM from '../stateDM';
import { StateDS } from '../../dataStore/stateDS';

@JsonConverter
export default class StateConverter implements JsonCustomConvert<StateDM> {
  serialize(data: StateDM): any {
    return data;
  }
  deserialize(data: string): StateDM {
    const stateDS = AppInjector.get(StateDS);
    const states = stateDS.items;
    const index = states.findIndex((state) => state.id === data);
    return states[index];
  }
}
