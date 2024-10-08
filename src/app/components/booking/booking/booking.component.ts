import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BookApiService } from 'src/app/api/book-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { PackageSizeTypeCS } from 'src/app/store/componentStore/packageSizeTypeCS';
import BookDM from 'src/app/store/dataModels/bookDM';
import CityDM from 'src/app/store/dataModels/cityDM';
import PackageInfoDM from 'src/app/store/dataModels/packageInfoDM';
import PreBookDM from 'src/app/store/dataModels/preBookDM';
import {
  getFromDestinationList,
  getFromOriginList,
} from 'src/app/utils/constants';
import { Links } from 'src/app/utils/links';
import { SendRouteComponent } from '../send-route/send-route.component';
import { IBookingLabel, Labels } from './booking.label';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import { BookingValidator } from './booking.validators';
import { PrinterCS } from 'src/app/store/componentStore/printerCS';
import { BillDetailViewerComponent } from '../../detail-viewer/bill-detail-viewer/bill-detail-viewer.component';
import { VehicleDetailViewerComponent } from '../../detail-viewer/vehicle-detail-viewer/vehicle-detail-viewer.component';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';
import PrinterDM from 'src/app/store/dataModels/printerDM';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  labels: IBookingLabel = {} as IBookingLabel;
  getFromOriginList = getFromOriginList;
  getFromDestinationList = getFromDestinationList;
  preBook: PreBookDM = new PreBookDM();
  book: BookDM = new BookDM();
  isSizeManually = false;
  loading = false;
  originStations: BehaviorSubject<OfficeDM[]> = new BehaviorSubject<OfficeDM[]>(
    []
  );
  destinationStations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  getFromOriginFilterList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    getFromOriginList
  );
  selectedPrinter: BehaviorSubject<PrinterDM> = new BehaviorSubject<PrinterDM>(
    {} as PrinterDM
  );
  getFromDestinationFilterList: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >(getFromDestinationList);
  myForm: FormGroup = new FormGroup({
    formControlOriginCity: new FormControl(
      this.preBook.originCity,
      BookingValidator.originCity
    ),
    formControlDestinationCity: new FormControl(
      '',
      BookingValidator.destinationCity
    ),
    formControlSenderFullName: new FormControl(
      '',
      BookingValidator.senderFullName
    ),
    formControlSenderNationalCode: new FormControl(
      '',
      BookingValidator.senderNationalCode
    ),
    formControlSenderMobile: new FormControl('', BookingValidator.senderMobile),
    formControlSenderPostalCode: new FormControl(
      '',
      BookingValidator.senderPostalCode
    ),
    formControlSenderBuildingNumber: new FormControl(''),
    formControlSenderAddress: new FormControl(''),
    formControlSenderStation: new FormControl(
      '',
      BookingValidator.senderStation
    ),
    formControlSenderUnitNumber: new FormControl(''),
    formControlReceiverFullName: new FormControl(
      '',
      BookingValidator.receiverFullName
    ),
    formControlReceiverMobile: new FormControl(
      '',
      BookingValidator.receiverMobile
    ),
    formControlReceiverPostalCode: new FormControl(
      '',
      BookingValidator.receiverPostalCode
    ),
    formControlReceiverBuildingNumber: new FormControl(''),
    formControlReceiverUnitNumber: new FormControl(''),
    formControlReceiverStation: new FormControl(
      '',
      BookingValidator.receiverStation
    ),
    formControlPrint: new FormControl('', BookingValidator.print),
    formControlReceiverAddress: new FormControl(''),
    formArray: new FormArray([]),
    formControlMarketerCommissionAmount: new FormControl(
      this.preBook.marketerCommissionAmount,
      BookingValidator.marketerCommissionAmount
    ),
    formControlPackingFeeAmount: new FormControl(
      this.preBook.packingFeeAmount,
      BookingValidator.packingFeeAmount
    ),
    formControlUnknownCourierAmount: new FormControl(
      this.preBook.unknownCourierAmount,
      BookingValidator.unknownCourierAmount
    ),
    formControlInsuranceAmount: new FormControl(
      this.preBook.insuranceAmount,
      BookingValidator.insuranceAmount
    ),
  });

  get Links() {
    return Links;
  }
  get printers() {
    return this.printerCS.itemsWatch;
  }
  get packageSizeTypes() {
    return this.packageSizeTypeCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private officeCS: OfficeCS,
    private cdr: ChangeDetectorRef,
    private printerCS: PrinterCS,
    private niraSnackBar: NiraSnackBarService,
    private packageSizeTypeCS: PackageSizeTypeCS,
    private bookApi: BookApiService,
    private applicationDS: ApplicationDS
  ) {}

  async ngOnInit(): Promise<void> {
    this.labels = this.labelManagerService.getLabels<IBookingLabel>(Labels);
    this.onAddPackageInfo();
    this.preBook.originCity = this.applicationDS.myInfo?.office?.city;
  }

  onAddPackageInfo() {
    this.preBook.packagesInfo?.push(new PackageInfoDM());
    (this.myForm.get('formArray') as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  async onOriginCityChange(city: CityDM) {
    if (!city.doorService) {
      this.getFromOriginFilterList.next(
        getFromOriginList.filter((item: any) => item.value === 'STATION')
      );
    } else {
      this.getFromOriginFilterList.next(getFromOriginList);
    }
    try {
      this.originStations.next(await this.getStations(city));
    } catch (error) {}
    this.preBook.originOffice = this.applicationDS.myInfo?.office;
  }
  ngAfterViewInit() {
    if (localStorage.getItem('selectedPrinter') !== null) {
      this.selectedPrinter.next(
        JSON.parse(localStorage.getItem('selectedPrinter')!)
      );
    } else {
      this.selectedPrinter.next(this.printers.value[0]);
    }
    this.cdr.detectChanges();
  }

  onSelectPrinter(event: any) {
    this.selectedPrinter.next(event);
  }

  async onDestinationCityChange(city: CityDM) {
    if (!city.doorService) {
      this.getFromDestinationFilterList.next(
        getFromDestinationList.filter((item: any) => item.value === 'STATION')
      );
    } else {
      this.getFromDestinationFilterList.next(getFromDestinationList);
    }
    try {
      this.destinationStations.next(await this.getStations(city));
    } catch (error) {}
    this.preBook.destinationOffice = this.destinationStations.getValue()[0];
  }

  removePackageInfo(index: number) {
    this.preBook.packagesInfo.splice(index, 1);
    (this.myForm.get('formArray') as FormArray).removeAt(index);
  }

  async getStations(city: CityDM): Promise<OfficeDM[]> {
    let stations: OfficeDM[] = [];
    try {
      stations = await this.officeCS.getOfficesByCityId(city.id);
    } catch (error) {
      console.log(error);
    }
    return stations;
  }

  async onSubmit() {
    this.loading = true;
    localStorage.setItem(
      'selectedPrinter',
      JSON.stringify(this.selectedPrinter.value)
    );
    try {
      const data = await this.bookApi.getQuote(this.preBook);
      this.book.preBookCode = data.FreightQuoteCode;
      this.niraModalService.open(SendRouteComponent, {
        data: { book: this.book, freightQuotes: data.FreightQuotes },
      });
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
    this.loading = false;
  }
}
