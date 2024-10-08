import { Component } from '@angular/core';

type TabSalesReport = 'ById' | 'ByDate';
@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
})
export class ManifestComponent {
  selectedComponent: TabSalesReport = 'ByDate';
}
