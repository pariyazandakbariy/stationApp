import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import RouteDM from '../routeDM';
import { AppInjector } from 'src/app/app.module';
import { RouteDS } from '../../dataStore/routeDS';

@JsonConverter
export default class RouteConverter implements JsonCustomConvert<RouteDM> {
  serialize(data: RouteDM): any {
    return data;
  }
  deserialize(data: number): RouteDM {
    const routeDS = AppInjector.get(RouteDS);
    const routes = routeDS.items;
    const index = routes.findIndex((route) => route.id === data);
    return routes[index];
  }
}
