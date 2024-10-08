import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutRadioButtons, MenuItem } from 'src/app/utils/types';
@Component({
  selector: 'core-radio-buttons',
  templateUrl: './core-radio-buttons.component.html',
  styleUrls: ['./core-radio-buttons.component.scss'],
})
export class CoreRadioButtonsComponent<T> implements OnInit {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  titleKeyObject!: keyof string | number;
  valueKeyObject!: keyof string | number;
  newItems: MenuItem<T>[] = [];
  _items: any = [];
  @Input() set items(data: any) {
    this._items = data;
    this.init();
  }
  @Input() defaultValue: string = '';
  @Input() titleKey!: string;
  @Input() valueKey!: string;
  @Input() layout: LayoutRadioButtons = 'column';
  @Input() name: string = 'radio';
  @Output() onChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.init();
  }

  changeItemsType(items: any[]): MenuItem<T>[] {
    return items.map((item) => {
      return {
        title: item[this.titleKeyObject],
        value: item[this.valueKeyObject],
      };
    });
  }
  init() {
    type ObjectKey = (typeof this._items)[0];
    this.titleKeyObject = this.titleKey as ObjectKey;
    this.valueKeyObject = this.valueKey as ObjectKey;

    this.newItems = this.changeItemsType(this._items);

    if (this.defaultValue == '') {
      this.onItemClick(this.newItems[0]);
    } else {
      this.onItemClick(
        this.newItems.find((item) => item.value == this.defaultValue)
      );
    }
  }
  onItemClick(item: MenuItem<T> | undefined): void {
    if (!item) return;
    this.selectedItem = item;
    this.onChange.emit(String(item.value));
  }
}
