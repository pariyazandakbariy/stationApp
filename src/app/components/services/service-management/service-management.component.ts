import { Component, Type } from '@angular/core';
type TabSalesReport = 'ByCode' | 'ByDate';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss'],
})
export class ServiceManagementComponent {
  selectedComponent: TabSalesReport = 'ByDate';
}
