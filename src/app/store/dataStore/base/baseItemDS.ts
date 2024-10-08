import { cloneDeep } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import Datamodel from '../../dataModels/base/datamodel';

export default abstract class BaseItemDS<Item extends Datamodel> {
  private _items: Item[] = [];
  itemsWatch: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  canStoreData = false;

  public get items(): Item[] {
    const itemClone = cloneDeep(this._items);
    return itemClone;
  }

  deleteAllItems() {
    this._items = [];
    this.itemsWatch.next([]);
  }

  addOrReplaceItem(item: Item) {
    if (item !== undefined) {
      const index = this._items.findIndex((data) => data.id === item.id);
      if (index != -1) {
        this._items[index] = item;
      } else {
        this._items.push(item);
      }
      this.itemsWatch.next(this._items);
    }
  }

  removeItem(id: number) {
    const index = this._items.findIndex((data) => data.id === id);
    delete this._items[index];
    this.itemsWatch.next(this._items);
  }

  async removeItems(ids: number[]) {
    for await (const id of ids) {
      const index = this._items.findIndex((data) => data?.id === id);
      this._items.splice(index, 1);
    }
    this.itemsWatch.next(this._items);
  }

  async addOrReplaceItems(items: Item[] = []) {
    if (items.length > 0) {
      for await (const item of items) {
        await this.addOrReplaceItemForArray(item);
      }
      this.itemsWatch.next(this._items);
    }
  }

  private addOrReplaceItemForArray(item: Item) {
    if (item !== undefined) {
      const index = this._items.findIndex((data) => data.id === item.id);
      if (index != -1) {
        this._items[index] = item;
      } else {
        this._items.push(item);
      }
    }
  }

  async storeData() {
    this.canStoreData = true;
    const data = localStorage.getItem(this.constructor.name);
    if (data) {
      const datajson = JSON.parse(data);
      const tmpObj: Item[] = [];
      Object.keys(datajson).map((key) => tmpObj.push(datajson[+key]));
      this.addOrReplaceItems(tmpObj);
    }
    this.itemsWatch.subscribe((items) => {
      localStorage.setItem(this.constructor.name, JSON.stringify(items));
    });
  }

  abstract doLoad(force: boolean, data?: any): void;
}
