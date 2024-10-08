import { Component, Input } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import {
  IOfficeDepotItemManagement,
  Labels,
} from './office-depot-item-management.label';
import { CoreSidePanel } from 'src/app/services/coreSidePanel.service';
type TabItem = 'aggregation' | 'deliveryService';
@Component({
  selector: 'app-office-depot-item-management',
  templateUrl: './office-depot-item-management.component.html',
  styleUrls: ['./office-depot-item-management.component.scss'],
})
export class OfficeDepotItemManagementComponent {
  labels =
    this.labelManagerService.getLabels<IOfficeDepotItemManagement>(Labels);
  selectedTab: TabItem = 'aggregation';
  @Input() data: any;
  constructor(
    private labelManagerService: LabelManagerService,
    private coreSidePanel: CoreSidePanel
  ) {}

  ngOnInit(): void {}
  itemTabClick(item: TabItem) {
    this.selectedTab = item;
  }
  close() {
    this.coreSidePanel.closeAll();
  }
}
