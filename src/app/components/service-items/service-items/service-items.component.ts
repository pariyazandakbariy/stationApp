import { Component } from '@angular/core';
type TabSalesReport = 'search' | 'incoming' | 'outgoing';

@Component({
  selector: 'app-service-items',
  templateUrl: './service-items.component.html',
  styleUrls: ['./service-items.component.scss'],
})
export class ServiceItemsComponent {
  selectedComponent: TabSalesReport = 'outgoing';
}
