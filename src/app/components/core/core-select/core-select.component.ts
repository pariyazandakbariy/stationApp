import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'src/app/utils/types';

@Component({
  selector: 'core-select',
  templateUrl: './core-select.component.html',
  styleUrls: ['./core-select.component.scss'],
})
export class CoreSelectComponent<T> implements OnInit {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  titleKeyObject!: keyof string | number;
  valueKeyObject!: keyof string | number;
  newItems: MenuItem<T>[] = [];
  isOpenMenu = false;
  _items: any = [];
  _defaultValue!: T;
  @Input() titleKey!: string;
  @Input() valueKey!: string;
  @Input() canHighlightBackground = false;
  @Input() set items(data: any) {
    this._items = data;
    this.init();
  }
  @Input() set defaultValue(data: T) {
    this._defaultValue = data;
    this.init();
  }
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() onItemSelected = new EventEmitter<any>();
  @Input() inputFormControl: FormControl = new FormControl('', []);

  init() {
    type ObjectKey = (typeof this._items)[0];
    this.titleKeyObject = this.titleKey as ObjectKey;
    this.valueKeyObject = this.valueKey as ObjectKey;
    this.newItems = this.changeItemsType(this._items);
    this.inputFormControl.setValue(this._defaultValue);
    this.onItemSelect(
      this.newItems.find((item) => item.value == this._defaultValue),
      false
    );
  }

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

  openMenuClick() {
    if (this.disabled) return;
    this.isOpenMenu = !this.isOpenMenu;
  }

  onItemSelect(selectedItem: MenuItem<T> | undefined, isFromUi: boolean): void {
    if (isFromUi) this.inputFormControl.markAsTouched();
    this.isOpenMenu = false;
    if (!selectedItem) {
      this.selectedItem = {} as MenuItem<T>;
      return;
    }
    this.selectedItem = selectedItem;
    const mainItem = this._items.find(
      (item: any) => item[this.valueKeyObject] === selectedItem.value
    );
    this.inputFormControl.setValue(selectedItem.value);
    this.onItemSelected.emit(mainItem);
  }
  focusOut() {
    this.isOpenMenu = false;
    this.inputFormControl.markAsTouched();
  }
}
