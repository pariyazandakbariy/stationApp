import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiraSnackBarModule } from 'nira-snack-bar';
import { declarationCores } from './core.module';
import { declarationIcons } from './icons.module';
import { LoginComponent } from './components/login/login.component';
import { PersianDigitsPipe } from './utils/pipes/persian-digits.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlPipe } from './utils/pipes/form-control.pipe';
import { DigitGroupPipe } from './utils/pipes/digit-group.pipe';
import { PriceFormatPipe } from './utils/pipes/price-format.pipe';
import { TimeFormatPipe } from './utils/pipes/time-format.pipe';
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardContentComponent } from './components/dashboard/dashoard-content/dashoard-content.component';
import { SlideMenuComponent } from './components/dashboard/slide-menu/slide-menu.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { NgxPrintModule } from 'ngx-print';
import { BookingComponent } from './components/booking/booking/booking.component';
import { PackageFormComponent } from './components/booking/package-form/package-form.component';
import { AddPackageFormComponent } from './components/booking/add-package-form/add-package-form.component';
import { SendRouteComponent } from './components/booking/send-route/send-route.component';
import { MessageLogoutDialogComponent } from './components/dialogs/message-logout-dialog/message-logout-dialog.component';
import { WeightPipe } from './utils/pipes/weight.pipe';
import { ShamsiDatePipe } from './utils/pipes/shamsi-date.pipe';
import { ChangeMasterApiComponent } from './components/change-master-api/change-master-api.component';
import { SalesReportComponent } from './components/sales-report/sales-report/sales-report.component';
import { SalesReportByDateComponent } from './components/sales-report/sales-report-by-date/sales-report-by-date.component';
import { SalesReportByBillCodeComponent } from './components/sales-report/sales-report-by-bill-code/sales-report-by-bill-code.component';
import { NiraDatePickerModule } from 'nira-date-picker';
import { NiraModalService } from 'nira-modal';
import { DisAggregateModalComponent } from './components/office-depot-items/office-depot-item-management/dis-aggregate-modal/dis-aggregate-modal.component';
import { AggregationComponent } from './components/office-depot-items/office-depot-item-management/aggregation/aggregation.component';
import { OfficeDepotItemComponent } from './components/office-depot-items/office-depot-items/office-depot-items.component';
import { OfficeDepotItemManagementComponent } from './components/office-depot-items/office-depot-item-management/office-depot-item-management/office-depot-item-management.component';
import { CargoDeliveryServiceComponent } from './components/office-depot-items/office-depot-item-management/cargo-delivery-service/cargo-delivery-service.component';
import { PrintersComponent } from './components/printers/printers/printers.component';
import { PrinterFormComponent } from './components/printers/printer-form/printer-form.component';
import { PrintLabelDialogComponent } from './components/dialogs/print-label-dialog/print-label-dialog.component';
import { ServiceItemsComponent } from './components/service-items/service-items/service-items.component';
import { ServiceIncomingItemsComponent } from './components/service-items/service-incoming-items/service-incoming-items.component';
import { ServiceOutGoingItemsComponent } from './components/service-items/service-out-going-items/service-out-going-items.component';
import { SearchServiceItemsComponent } from './components/service-items/search-service-items/search-service-items.component';
import { VoidBillModalComponent } from './components/sales-report/void-bill-modal/void-bill-modal.component';
import { GenerateServiceComponent } from './components/office-depot-items/office-depot-item-management/generate-service/generate-service.component';
import { StationFormComponent } from './components/office-depot-items/office-depot-item-management/generate-service/station-form/station-form.component';
import { OffLoadModalComponent } from './components/service-items/off-load-modal/off-load-modal.component';
import { ScannerModalComponent } from './components/dialogs/scaner-modal/scaner-modal.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { OfficeDepotItemsToTransferComponent } from './components/office-depot-items/office-depot-items-to-transfer/office-depot-items-to-transfer.component';
import { OfficeDepotItemsToDeliveryComponent } from './components/office-depot-items/office-depot-items-to-delivery/office-depot-items-to-delivery.component';
import { ServiceManagementComponent } from './components/services/service-management/service-management.component';
import { ServicesByDateComponent } from './components/services/services-by-date/services-by-date.component';
import { ServicesInformationComponent } from './components/services/service-information/service-information.component';
import { ManifestComponent } from './components/Manifest/manifest/manifest.component';
import { ManifestByDateComponent } from './components/Manifest/manifest-by-date/manifest-by-date.component';
import { ServiceManifestDialogComponent } from './components/office-depot-items/office-depot-item-management/service-manifest-dialog/service-manifest-dialog.component';
import { ManifestByManifestIdComponent } from './components/Manifest/manifest-by-manifest-id/manifest-by-manifest-id.component';
import { DriversComponent } from './components/driver/drivers/drivers.component';
import { DriverFormComponent } from './components/driver/driver-form/driver-form.component';
import { ServicesManifestDialogComponent } from './components/Manifest/service-manifest-dialog/services-manifest-dialog.component';
import { PrintManifestComponent } from './components/Manifest/print-manifest/print-manifest.component';
import { BillDetailViewerComponent } from './components/detail-viewer/bill-detail-viewer/bill-detail-viewer.component';
import { ServiceDetailViewerComponent } from './components/detail-viewer/service-detail-viewer/service-detail-viewer.component';
import { DriverDetailViewerComponent } from './components/detail-viewer/driver-detail-viewer/driver-detail-viewer.component';
import { ManifestDetailViewerComponent } from './components/detail-viewer/manifest-detail-viewer/manifest-detail-viewer.component';
import { VehicleDetailViewerComponent } from './components/detail-viewer/vehicle-detail-viewer/vehicle-detail-viewer.component';
import { TraditionalManifestByDateComponent } from './components/traditional-manifest-list/traditional-manifest-by-date/traditional-manifest-by-date.component';
import { DetailViewerManagerDirective } from './utils/directives/detail-viewer-manager.directive';
import { TableDetailViewerManagerDirective } from './utils/directives/table-detail-viewer-manager.directive';
import { TraditionalManifestModalComponent } from './components/traditional-manifest-list/traditional-manifest-modal/traditional-manifest-modal.component';
import { TraditionalManifestItemFormComponent } from './components/traditional-manifest-list/traditional-manifest-item-form/traditional-manifest-item-form.component';
import { TraditionalManifestFormComponent } from './components/traditional-manifest-list/traditional-manifest-form/traditional-manifest-form.component';
import { VehiclesComponent } from './components/vahicles/vehicles/vehicles.component';
import { VehicleFormComponent } from './components/vahicles/vehicle-form/vehicle-form.component';
import { AccountReportComponent } from './components/account-report/account-report/account-report.component';
import { DetailAccountReportComponent } from './components/account-report/detail-account-report/detail-account-report.component';
import { TypeAccountReportComponent } from './components/account-report/type-account-report/type-account-report.component';
import { ExportExcelTableDirective } from './utils/directives/export-excel-table.directive';
import { CopyToClipboardDirective } from './utils/directives/copy-to-clipboard.directive';
import { SummeryAccountReportComponent } from './components/account-report/summery-account-report/summery-account-report.component';
import { BalanceAccountReportComponent } from './components/account-report/balance-account-report/balance-account-report.component';
import { VoidManifestDialogComponent } from './components/Manifest/void-manifest-dialog/void-manifest-dialog.component';
import { MarketersComponent } from './components/marketer/marketers/marketers.component';
import { MarketerFormComponent } from './components/marketer/marketer-form/marketer-form.component';
import { DebtReportComponent } from './components/account-report/debt-report/debt-report.component';
import { DemandReportComponent } from './components/account-report/demand-report/demand-report.component';
import { SettlementVehicleDebtToOfficeComponent } from './components/vahicles/settlement-vehicle-debt-to-office/settlement-vehicle-debt-to-office.component';
import { SettlementOfficeDebtToVehicleComponent } from './components/vahicles/settlement-office-debt-to-vehicle/settlement-office-debt-to-vehicle.component';
import { OfficeDepotItemsDeliveryFormDialogComponent } from './components/office-depot-items/office-depot-items-delivery-form-dialog/office-depot-items-delivery-form-dialog.component';
import { AssetReportComponent } from './components/account-report/asset-report/asset-report.component';
import { IncomeReportComponent } from './components/account-report/income-report/income-report.component';
import { ExpenseReportComponent } from './components/account-report/expense-report/expense-report.component';
import { DebtDemandBalanceAccountReportComponent } from './components/account-report/debt-demand-balance-account-report/debt-demand-balance-account-report.component';

export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,
    PackageFormComponent,
    DashboardHeaderComponent,
    DashboardComponent,
    DashboardContentComponent,
    DisAggregateModalComponent,
    SlideMenuComponent,
    LoginComponent,
    InvoiceComponent,
    BookingComponent,
    AddPackageFormComponent,
    SendRouteComponent,
    ServiceItemsComponent,
    ServiceIncomingItemsComponent,
    ServiceOutGoingItemsComponent,
    SearchServiceItemsComponent,
    OfficeDepotItemComponent,
    OfficeDepotItemManagementComponent,
    OffLoadModalComponent,
    CargoDeliveryServiceComponent,
    AggregationComponent,
    SalesReportComponent,
    SalesReportByDateComponent,
    SalesReportByBillCodeComponent,
    PrintersComponent,
    PrinterFormComponent,
    PersianDigitsPipe,
    FormControlPipe,
    ChangeMasterApiComponent,
    PrintLabelDialogComponent,
    GenerateServiceComponent,
    StationFormComponent,
    DigitGroupPipe,
    PriceFormatPipe,
    WeightPipe,
    TimeFormatPipe,
    MessageLogoutDialogComponent,
    ShamsiDatePipe,
    VoidBillModalComponent,
    ScannerModalComponent,
    OfficeDepotItemsToTransferComponent,
    OfficeDepotItemsToDeliveryComponent,
    ServiceManagementComponent,
    ServicesByDateComponent,
    ServicesInformationComponent,
    ManifestComponent,
    OfficeDepotItemsDeliveryFormDialogComponent,
    ManifestByDateComponent,
    ServiceManifestDialogComponent,
    ManifestByManifestIdComponent,
    DriversComponent,
    DriverFormComponent,
    DebtReportComponent,
    DebtDemandBalanceAccountReportComponent,
    DemandReportComponent,
    ServicesManifestDialogComponent,
    SettlementVehicleDebtToOfficeComponent,
    SettlementOfficeDebtToVehicleComponent,
    PrintManifestComponent,
    BillDetailViewerComponent,
    ServiceDetailViewerComponent,
    DriverDetailViewerComponent,
    ManifestDetailViewerComponent,
    VehicleDetailViewerComponent,
    TraditionalManifestByDateComponent,
    TraditionalManifestModalComponent,
    TraditionalManifestItemFormComponent,
    TraditionalManifestFormComponent,
    DetailViewerManagerDirective,
    TableDetailViewerManagerDirective,
    AccountReportComponent,
    AssetReportComponent,
    ExpenseReportComponent,
    IncomeReportComponent,
    DetailAccountReportComponent,
    BalanceAccountReportComponent,
    SummeryAccountReportComponent,
    TypeAccountReportComponent,
    CopyToClipboardDirective,
    VehiclesComponent,
    VehicleFormComponent,
    VoidManifestDialogComponent,
    MarketersComponent,
    MarketerFormComponent,
    ExportExcelTableDirective,
    declarationCores,
    declarationIcons,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    BrowserAnimationsModule,
    NiraSnackBarModule,
    NiraDatePickerModule,
    NgxScannerQrcodeModule,
  ],
  exports: [
    PersianDigitsPipe,
    FormControlPipe,
    DigitGroupPipe,
    PriceFormatPipe,
    TimeFormatPipe,
    WeightPipe,
    ShamsiDatePipe,
  ],
  providers: [
    {
      provide: 'NiraModalService',
      useClass: NiraModalService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
