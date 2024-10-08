import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NiraModalConfig, NiraModalService } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { GenerateServiceApiService } from 'src/app/api/generateService-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import { CarrierCS } from 'src/app/store/componentStore/carrierCS';
import { VehicleTypeCS } from 'src/app/store/componentStore/vehicleTypeCS';
import CityDM from 'src/app/store/dataModels/cityDM';
import GenerateServiceDM from 'src/app/store/dataModels/generateServiceDM';
import VehicleTypeDM from 'src/app/store/dataModels/vehicleTypeDM';
import { DeleteIconComponent } from 'src/app/svg-icons/delete-icon/delete-icon.component';
import { COLUMNS_TYPES, daysOfWeek } from 'src/app/utils/constants';
import { Util } from 'src/app/utils/util';
import { IMessageDialogLabel, MessageLabels } from './generate-service.label';
import { ServiceValidator } from './generate-service.validators';
import { StationFormComponent } from './station-form/station-form.component';
import { OfficeDepotItemToTransferCS } from 'src/app/store/componentStore/officeDepotItemToTransferCS';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import moment from 'jalali-moment';
import { ServiceInformationApiService } from 'src/app/api/serviceInformation-api.service';

@Component({
  selector: 'app-generate-service',
  templateUrl: './generate-service.component.html',
  styleUrls: ['./generate-service.component.scss'],
})
export class GenerateServiceComponent {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  daysOfWeek = daysOfWeek;
  loading = false;
  generateService: GenerateServiceDM = new GenerateServiceDM();
  service: ServiceDM | undefined;
  labels: IMessageDialogLabel =
    this.labelManagerService.getLabels<IMessageDialogLabel>(MessageLabels);
  originStations: BehaviorSubject<OfficeDM[]> = new BehaviorSubject<OfficeDM[]>(
    []
  );
  stationList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  destinationStations: BehaviorSubject<OfficeDM[]> = new BehaviorSubject<
    OfficeDM[]
  >([]);
  get selectedAggregationItems() {
    return this.officeDepotItemToTransferCS.selectedAggregationItems;
  }
  myForm: FormGroup = new FormGroup({
    formControlCompany: new FormControl('', [Validators.required]),
    formControlOriginCity: new FormControl(
      this.generateService.originCity,
      ServiceValidator.originCity
    ),
    formControlServiceNumber: new FormControl(
      '',
      ServiceValidator.serviceNumber
    ),
    formControlDestinationCity: new FormControl(
      '',
      ServiceValidator.destinationCity
    ),
    formControlOriginStation: new FormControl(
      '',
      ServiceValidator.originStation
    ),
    formControlDestinationStation: new FormControl(
      '',
      ServiceValidator.destinationStation
    ),
    formControlVehicleType: new FormControl('', ServiceValidator.vehicleType),
    formControlFromDate: new FormControl('', ServiceValidator.fromDate),
    formControlToDate: new FormControl('', ServiceValidator.toDate),
    formControlReceiveTime: new FormControl('', ServiceValidator.receiveTime),
    formControlDepartureTime: new FormControl(
      '',
      ServiceValidator.departureTime
    ),
  });

  get vehicleTypes() {
    return this.vehicleTypeCS.itemsWatch;
  }
  get carriers() {
    return this.carrierCS.itemsWatch;
  }

  columnsSchema = [
    {
      key: 'itemNumber',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderId,
    },
    {
      key: 'office',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderOffice,
      data: {
        key: 'officeName',
      },
    },
    {
      key: 'stopTime',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderStopTime,
    },
    {
      key: 'delete',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableHeaderAction,
      data: [
        {
          component: DeleteIconComponent,
          key: 'delete',
        },
      ],
    },
  ];
  get tableData() {
    return this.stationList;
  }
  get isVehicleTypeBus() {
    return this.generateService.vehicleType?.vehicleTypeId == 'BUS';
  }
  get isEditMode() {
    return this.config?.data?.service ? true : false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private cdr: ChangeDetectorRef,
    private vehicleTypeCS: VehicleTypeCS,
    private carrierCS: CarrierCS,
    private niraSnackBar: NiraSnackBarService,
    private generateServiceApi: GenerateServiceApiService,
    private serviceInformationApi: ServiceInformationApiService,
    private officeCS: OfficeCS,
    private applicationDS: ApplicationDS,
    private niraModalService: NiraModalService,
    private officeDepotItemToTransferCS: OfficeDepotItemToTransferCS
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.isEditMode) {
      this.service = this.config.data.service;
      this.convertServiceToGenerateService();

      this.myForm.setValue({
        formControlServiceNumber: this.generateService.serviceNo,
        formControlCompany: this.generateService.carrier?.carrierId,
        formControlOriginCity: this.generateService.originCity?.cityId,
        formControlOriginStation: this.generateService.originOffice?.officeId,
        formControlDestinationCity:
          this.generateService.destinationCity?.cityId,
        formControlDestinationStation:
          this.generateService.originOffice?.officeId,
        formControlVehicleType: this.generateService.vehicleType?.vehicleTypeId,
        formControlFromDate: this.generateService.fromDate,
        formControlToDate: this.generateService.toDate,
        formControlReceiveTime: this.generateService.arrivalTime,
        formControlDepartureTime: this.generateService.departureTime,
      });
    } else {
      this.generateService.originCity = this.applicationDS.myInfo?.office?.city;

      if (this.config?.data?.destinationCity) {
        this.setDestination();
      }
    }
    this.generateService.dayOfWeek = '1234567';
  }
  convertServiceToGenerateService() {
    if (!this.service) return;
    this.generateService.serviceId = this.service.serviceId;
    this.generateService.serviceNo = this.service.serviceNo;
    this.generateService.carrier = this.service.carrier;
    this.generateService.destinationCity = this.service.destinationCity;
    this.generateService.destinationOffice = this.service.destinationOffice;
    this.generateService.originCity = this.service.originCity;
    this.generateService.originOffice = this.service.originOffice!;
    this.generateService.driverCode = this.service.driver?.driverCode!;
    this.generateService.vehicle = this.service.vehicle;
    this.generateService.vehicleType = this.service.vehicleType;

    const arrivalDateTime = moment(
      this.service.arrivalDateTime,
      'YYYY-MM-DD HH:mm'
    );
    const departureDateTime = moment(
      this.service.departureDateTime,
      'YYYY-MM-DD HH:mm'
    );

    this.generateService.arrivalTime = arrivalDateTime.format('HH:mm');
    this.generateService.fromDate = arrivalDateTime.format('jYYYY-jMM-jDD');

    this.generateService.departureTime = departureDateTime.format('HH:mm');
    this.generateService.toDate = departureDateTime.format('jYYYY-jMM-jDD');
  }
  async setDestination() {
    this.generateService.destinationCity = this.config.data?.destinationCity;
    await this.onDestinationCityChange(this.generateService.destinationCity);
    const destinationOffice = this.config.data?.destinationOffice;
    if (destinationOffice)
      this.generateService.destinationOffice =
        this.getDestinationOfficeFromItem(destinationOffice);
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

  getDestinationOfficeFromItem(selectedOffice: OfficeDM) {
    const index = this.destinationStations
      .getValue()
      .findIndex((office) => office.officeId === selectedOffice.officeId);
    return this.destinationStations.getValue()[index];
  }

  async onDestinationCityChange(city: CityDM | undefined) {
    if (city) this.destinationStations.next(await this.getStations(city));
  }

  async onOriginCityChange(city: CityDM) {
    try {
      this.originStations.next(await this.getStations(city));
    } catch (error) {}
    this.generateService.originOffice = this.applicationDS.myInfo?.office;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  onVehicleTypeChange(vehicleType: VehicleTypeDM) {
    if (this.isVehicleTypeBus) {
      this.myForm.addControl(
        'formControlDriver',
        new FormControl('', Validators.required)
      );
    } else {
      this.myForm.removeControl('formControlDriver');
    }
  }

  onChangeDaysOfWeek(id: string) {
    if (this.generateService.dayOfWeek.indexOf(id) > -1) {
      this.generateService.dayOfWeek = this.generateService.dayOfWeek.replace(
        id,
        ''
      );
      return;
    }
    this.generateService.dayOfWeek += id;
  }

  openFormModal() {
    const dialog = this.niraModalService.open(StationFormComponent);
    dialog.afterClosed.subscribe((data) => {
      if (data) {
        this.generateService.minimalStations.push(data);
        this.stationList.next(
          this.generateService.minimalStations.map((item, i) => {
            return {
              itemNumber: i + 1,
              office: item.office,
              stopTime: item.stopTime,
            };
          })
        );
      }
    });
  }

  onColumnClicked(data: { data: any; key: string }) {
    const stations = this.stationList.getValue();
    const index = stations.findIndex(
      (station) => station.itemNumber === data.data.itemNumber
    );

    if (index >= 0) {
      stations.splice(index, 1);
      this.generateService.minimalStations = stations;
      this.stationList.next(stations);
    }
  }

  onPelakChange(event: any) {
    this.generateService.vehicle = event;
  }

  async onSubmit() {
    this.generateService.fromDate = Util.shamsiToMiladi(
      this.myForm.controls['formControlFromDate'].value,
      'YYYY-MM-DD'
    );
    this.generateService.toDate = Util.shamsiToMiladi(
      this.myForm.controls['formControlToDate'].value,
      'YYYY-MM-DD'
    );
    try {
      if (this.isEditMode) {
        await this.serviceInformationApi.edit(this.generateService);
      } else {
        await this.generateServiceApi.GenerateServiceSchedule(
          this.generateService
        );
      }

      this.close();
    } catch (error) {
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

  close() {
    this.closeSubject.next('true');
  }
}
