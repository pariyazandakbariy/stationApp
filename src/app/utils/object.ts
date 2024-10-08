import Datamodel from '../store/dataModels/base/datamodel';

export function isEmpty(value: any): boolean {
  if (value instanceof Datamodel) return value.isEmpty();
  if (!value) return true;
  if (value.constructor === Object && Object.keys(value).length === 0)
    return true;
  if (value.constructor === Array && value.length === 0) return true;
  if (value === undefined || value === null) {
    return true;
  }
  return false;
}
