import { Component } from '@angular/core';

type TabSalesReport = 'ByCode' | 'ByDate';
@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss'],
})
export class SalesReportComponent {
  selectedComponent: TabSalesReport = 'ByDate';
}
