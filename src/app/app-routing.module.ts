import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ApiDataResolver } from './api/apiDataResolver.service';
import { Links } from './utils/links';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { BookingComponent } from './components/booking/booking/booking.component';
import { ChangeMasterApiComponent } from './components/change-master-api/change-master-api.component';
import { SalesReportComponent } from './components/sales-report/sales-report/sales-report.component';
import { OfficeDepotItemComponent } from './components/office-depot-items/office-depot-items/office-depot-items.component';
import { PrintersComponent } from './components/printers/printers/printers.component';
import { ServiceItemsComponent } from './components/service-items/service-items/service-items.component';
import { ServiceManagementComponent } from './components/services/service-management/service-management.component';
import { ManifestComponent } from './components/Manifest/manifest/manifest.component';
import { DriversComponent } from './components/driver/drivers/drivers.component';
import { PrintManifestComponent } from './components/Manifest/print-manifest/print-manifest.component';
import { TraditionalManifestByDateComponent } from './components/traditional-manifest-list/traditional-manifest-by-date/traditional-manifest-by-date.component';
import { VehiclesComponent } from './components/vahicles/vehicles/vehicles.component';
import { AccountReportComponent } from './components/account-report/account-report/account-report.component';
import { DebtReportComponent } from './components/account-report/debt-report/debt-report.component';
import { DemandReportComponent } from './components/account-report/demand-report/demand-report.component';
import { IncomeReportComponent } from './components/account-report/income-report/income-report.component';
import { ExpenseReportComponent } from './components/account-report/expense-report/expense-report.component';
import { AssetReportComponent } from './components/account-report/asset-report/asset-report.component';
const BaseResolver: ResolveFn<String> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ApiDataResolver).loadData();
};
const routes: Routes = [
  {
    path: Links.login.name,
    component: LoginComponent,
  },
  {
    path: Links.dashboard.name,
    component: DashboardComponent,
    resolve: { data: BaseResolver },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: AppComponent,
        children: [{ path: Links.home.name, component: AppComponent }],
      },
      {
        path: Links.invoice.name + '/:billCode',
        component: InvoiceComponent,
      },
      { path: Links.booking.name, component: BookingComponent },
      { path: Links.salesReport.name, component: SalesReportComponent },
      { path: Links.printers.name, component: PrintersComponent },
      { path: Links.drivers.name, component: DriversComponent },
      { path: Links.serviceItems.name, component: ServiceItemsComponent },
      {
        path: Links.officeDepotItems.name,
        component: OfficeDepotItemComponent,
      },
      {
        path: Links.services.name,
        component: ServiceManagementComponent,
      },
      { path: Links.debtReport.name, component: DebtReportComponent },
      { path: Links.demandReport.name, component: DemandReportComponent },
      { path: Links.incomeReport.name, component: IncomeReportComponent },
      { path: Links.expenseReport.name, component: ExpenseReportComponent },
      { path: Links.assetReport.name, component: AssetReportComponent },
      {
        path: Links.manifest.name,
        component: ManifestComponent,
      },
      {
        path: Links.printManifest.name + '/:manifestId',
        component: PrintManifestComponent,
      },
      {
        path: Links.traditionalManifest.name,
        component: TraditionalManifestByDateComponent,
      },
      {
        path: Links.vehicles.name,
        component: VehiclesComponent,
      },
    ],
  },
  {
    path: Links.changeMasterApi.name,
    component: ChangeMasterApiComponent,
  },
  {
    path: 'debug-mode',
    component: ChangeMasterApiComponent,
  },
  {
    path: 'production-mode',
    component: ChangeMasterApiComponent,
  },
  {
    path: '**',
    redirectTo: Links.login.name,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
