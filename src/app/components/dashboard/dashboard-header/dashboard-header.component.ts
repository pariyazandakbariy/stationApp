import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import {
  DashboardHeaderLabels,
  IDashboardHeaderLabel,
} from './dashboard-header.label';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  dashboardHeaderLabels: IDashboardHeaderLabel = {} as IDashboardHeaderLabel;
  @Output() menuSelectEmit = new EventEmitter<string>();
  @Input() set isSelectedItemEmit(value: boolean) {
    this.isMenuOpen = value; 
  }
  isMenuOpen = true;
  constructor(private labelManagerService: LabelManagerService) {}
  ngOnInit(): void {
    this.dashboardHeaderLabels =
      this.labelManagerService.getLabels<IDashboardHeaderLabel>(
        DashboardHeaderLabels
      );
  }

  onMenuSelect() {
    this.menuSelectEmit.emit();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
