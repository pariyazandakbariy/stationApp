import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MenuItem } from 'src/app/utils/types';

@Component({
  selector: 'core-auto-complete',
  templateUrl: './core-auto-complete.component.html',
  styleUrls: ['./core-auto-complete.component.scss'],
})
export class CoreAutoCompleteComponent<T> implements OnInit {
  selectedItem: MenuItem<T> = {} as MenuItem<T>;
  titleKeyObject!: keyof string | number;
  valueKeyObject!: keyof string | number;
  filterItems: MenuItem<T>[] = [];
  newItems: MenuItem<T>[] = [];
  value!: T;
  isOpenMenu = false;

  get _items() {
    return this.filterItems;
  }

  @Input() label = 'ddd';
  @Input() titleKey!: string;
  @Input() valueKey!: string;
  @Input() items: any[] = [];
  @Input() set defaultValue(value: T) {
    this.value = value;
  }
  @Output() itemIdEmit = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    type ObjectKey = (typeof this.items)[0];
    this.titleKeyObject = this.titleKey as ObjectKey;
    this.valueKeyObject = this.valueKey as ObjectKey;
    this.newItems = this.changeItemsType(this.items);

    this.filterItems = this.newItems.filter(
      (item: any) => !item.title.indexOf(this.value)
    );
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
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
    this.isOpenMenu = !this.isOpenMenu;
    this.filterItems = this.newItems.filter(
      (item: any) => !item.title.indexOf(this.value)
    );
  }

  onItemSelect(item: MenuItem<T> | undefined): void {
    this.isOpenMenu = false;
    if (!item) return;
    this.selectedItem = item;
    this.value = item.title;
  }

  focusOut() {
    if (!this.items || this.items.length == 0 || !this.selectedItem) return;
    setTimeout(() => {
      this.isOpenMenu = false;
      if (!this.newItems.some((item: any) => item.title == this.value)) {
        this.value = this.selectedItem.title;
      }
    }, 100);
  }

  onChanged(value: any) {
    this.filterItems = this.items.filter(
      (item: any) => !item.title.indexOf(value)
    );
  }
}
