import { Component } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { IOfficeDepotItem, Labels } from './office-depot-items.label';

export type TabDepotItem = 'toDelivery' | 'toTransfer';
@Component({
  selector: 'app-office-depot-items',
  templateUrl: './office-depot-items.component.html',
  styleUrls: ['./office-depot-items.component.scss'],
})
export class OfficeDepotItemComponent {
  labels: IOfficeDepotItem =
    this.labelManagerService.getLabels<IOfficeDepotItem>(Labels);
  selectedComponent: TabDepotItem = 'toDelivery';
  constructor(private labelManagerService: LabelManagerService) {}
}
