import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs';
import { GenerateServiceApiService } from 'src/app/api/generateService-api.service';
import { CoreSidePanel } from 'src/app/services/coreSidePanel.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { CityCS } from 'src/app/store/componentStore/cityCS';
import { OfficeDepotItemToTransferCS } from 'src/app/store/componentStore/officeDepotItemToTransferCS';
import { VehicleTypeCS } from 'src/app/store/componentStore/vehicleTypeCS';
import CityDM from 'src/app/store/dataModels/cityDM';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { GenerateServiceComponent } from '../generate-service/generate-service.component';
import { ServiceManifestDialogComponent } from '../service-manifest-dialog/service-manifest-dialog.component';
import { ICargoDeliveryService, Labels } from './cargo-delivery-service.label';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';

@Component({
  selector: 'cargo-delivery-service',
  templateUrl: './cargo-delivery-service.component.html',
  styleUrls: ['./cargo-delivery-service.component.scss'],
})
export class CargoDeliveryServiceComponent {
  labels = this.labelManagerService.getLabels<ICargoDeliveryService>(Labels);
  loadingBoardItems = false;
  loadingSearchService = false;
  destinationCity: CityDM | undefined = undefined;
  destinationOffice: OfficeDM | undefined = undefined;
  services: ServiceDM[] = [];
  selectedService: ServiceDM | undefined = undefined;
  destinationStations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedStation: OfficeDM | undefined = undefined;
  myForm: FormGroup = new FormGroup({
    formControlDestinationCity: new FormControl('', Validators.required),
    formControlDestinationStation: new FormControl('', Validators.required),
  });
  get vehicleTypes() {
    return this.vehicleTypeCS.itemsWatch;
  }
  get selectedAggregationItems() {
    return this.officeDepotItemCS.selectedAggregationItems;
  }
  columnsSchema = [
    {
      key: 'vehicleTypeId',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderVehicleTypeId,
    },
    {
      key: 'vehicleTypeNameFa',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderVehicleTypeNameFa,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION,
      label: this.labels.tableHeaderAction,
      data: {
        component: GenerateServiceComponent,
        key: 'vehicleTypeId',
      },
    },
  ];
  constructor(
    private vehicleTypeCS: VehicleTypeCS,
    private officeCS: OfficeCS,
    private officeDepotItemCS: OfficeDepotItemToTransferCS,
    private cityCS: CityCS,
    private niraSnackBar: NiraSnackBarService,
    private coreSidePanel: CoreSidePanel,
    private generateServiceApiService: GenerateServiceApiService,
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService
  ) {}

  ngOnInit(): void {
    this.destinationCity =
      this.selectedAggregationItems.getValue()[0].destinationCity;

    this.destinationOffice =
      this.selectedAggregationItems.getValue()[0].destinationOffice;
  }
  openFormModal() {
    this.niraModalService.open(GenerateServiceComponent, {
      data: {
        destinationCity: this.destinationCity,
        destinationOffice: this.destinationOffice,
      },
    });
  }

  async generateServiceManifest() {
    this.loadingBoardItems = true;
    const uniqueKeys = this.selectedAggregationItems
      .getValue()
      .map((officeDepotItem) => officeDepotItem.itemUniqueKey);
    try {
      const data: any =
        await this.generateServiceApiService.GenerateServiceManifest(
          uniqueKeys,
          this.selectedService!.serviceId
        );
      this.loadingBoardItems = false;
      this.niraModalService.open(ServiceManifestDialogComponent, {
        data: {
          generateServiceManifests: data,
          selectedServiceId: this.selectedService!.serviceId,
        },
        outsideClose: false,
      });
    } catch (error) {
      this.loadingBoardItems = false;
      let message = '';
      if (typeof error === 'string') {
        message = error.toString();
      } else if (error instanceof Error) {
        message = error.message;
      }
      this.niraSnackBar.show(message, {
        statusClass: 'error',
        duration: 3000,
      });
    }
  }

  onServiceSelect(service: ServiceDM) {
    this.selectedService = service;
  }

  editServiceClicked(service: ServiceDM) {
    const dialog = this.niraModalService.open(GenerateServiceComponent, {
      data: {
        service: service,
      },
    });
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.onSearchServiceSubmit();
      }
    });
  }

  getCityById(id: string) {
    return this.cityCS.getCityById(id);
  }

  async onSearchServiceSubmit() {
    this.loadingSearchService = true;
    const data: ServiceDM[] =
      await this.generateServiceApiService.ServicesListByDestinationOfficeCode(
        this.selectedStation!
      );
    if (data.length === 0) {
      this.niraSnackBar.show(this.labels.messageError, {
        statusClass: 'error',
        duration: 3000,
      });
    }
    this.services = data;
    this.loadingSearchService = false;
  }

  async onDestinationCityChange(city: CityDM) {
    this.destinationStations.next(await this.getStations(city));
  }

  async getStations(city: CityDM): Promise<OfficeDM[]> {
    let stations: OfficeDM[] = [];
    try {
      stations = await this.officeCS.getOfficesByCityId(city.cityId);
    } catch (error) {
      console.log(error);
    }
    return stations;
  }
}
