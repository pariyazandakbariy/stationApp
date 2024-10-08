import { JsonConvert } from 'json2typescript';

export class JsonParser {
  private static instance: JsonConvert;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  // @ts-ignore
  private constructor() {
    return;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  private static getConverter(): JsonConvert {
    if (!JsonParser.instance) {
      JsonParser.instance = new JsonConvert();
    }

    return JsonParser.instance;
  }

  public static deserializeArray<T>(
    jsonArray: any[],
    classReferencing: { new (): T },
  ): T[] {
    // @ts-ignore
    return this.getConverter().deserializeArray<T>(jsonArray, classReferencing);
  }

  public static deserializeObject<T>(
    jsonObject: any,
    classReference: { new (): T },
  ): T {
    // @ts-ignore
    return this.getConverter().deserializeObject<T>(jsonObject, classReference);
  }

  public static serializeObject<T>(data: any) {
    // @ts-ignore
    return this.getConverter().serializeObject<T>(data);
  }
}
