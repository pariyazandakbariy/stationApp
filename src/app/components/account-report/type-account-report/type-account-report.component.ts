import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { BehaviorSubject, of } from 'rxjs';
import {
  AccountReportLabels,
  IAccountReport,
} from '../account-report/account-report.label';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';
import { DriverCourierCS } from 'src/app/store/componentStore/driverCourierCS';
import { map } from 'lodash';
import DriverDM from 'src/app/store/dataModels/driverDM';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import DriverCourierDM from 'src/app/store/dataModels/driverCourierDM';

@Component({
  selector: 'app-type-account-report',
  templateUrl: './type-account-report.component.html',
  styleUrls: ['./type-account-report.component.scss'],
})
export class TypeAccountReportComponent {
  @Input() reportType = '';
  @Output() onSelect = new EventEmitter<{
    center1: string;
    center2: string;
    center2Name: string;
  }>();
  labels =
    this.labelManagerService.getLabels<IAccountReport>(AccountReportLabels);
  selectedType: string = '';
  types = of([
    { id: '0', name: 'همه' },
    { id: 'VAT', name: 'مالیات ارزش افزوده' },
    { id: 'VEHICLE', name: 'وسیله نقلیه' },
    { id: 'OFFICE', name: 'دفاتر' },
    { id: 'MARKETER', name: 'بازاریاب ها' },
    { id: 'COURIER', name: 'پیک ها' },
  ]);
  newOffices = new BehaviorSubject<OfficeDM[]>([]);
  newDriverCouriers = new BehaviorSubject<DriverCourierDM[]>([]);

  driver: any = {
    id: 0,
    driverId: 0,
    firstName: 'همه',
    lastName: ' ',
    gender: undefined,
    nationalityCountryCode: 'IR',
    nationalCode: ' ',
    extraInfo: ' ',
    mobilePhone: ' ',
    driverFullName: 'همه',
  };
  office: any = {
    id: 0,
    officeId: 0,
    officeName: 'همه',
    officeType: ' ',
    city: undefined,
    currencyCode: '',
    abilityAccept: false,
    abilityDelivery: false,
    abilityDepot: false,
    postalAddressFa: ' ',
    postalAddressEn: ' ',
    controlNote: ' ',
  };
  driverCourier: any = {
    id: 0,
    driverId: 0,
    firstName: 'همه',
    lastName: ' ',
    gender: '',
    nationalityCountryCode: 'IR',
    nationalCode: ' ',
    mobilePhone: ' ',
    driverCourierFullName: 'همه',
  };

  get offices() {
    return this.officeCS.itemsWatch;
  }
  get driverCouriers() {
    return this.driverCourierCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private officeCS: OfficeCS,
    private driverCourierCS: DriverCourierCS
  ) {}

  async ngOnInit(): Promise<void> {
    await this.officeCS.doLoad();
    await this.driverCourierCS.doLoad();
    this.newOffices.next([this.office, ...this.offices.getValue()]);
    this.newDriverCouriers.next([
      this.driverCourier,
      ...this.driverCouriers.getValue(),
    ]);
  }

  onSelectedType(id: string) {
    this.selectedType = id;
    if (this.selectedType.toString() === '0') {
      this.onSelect.emit({
        center1: '0',
        center2: '0',
        center2Name: '',
      });
    } else if (
      this.selectedType.toString() === 'VAT' ||
      this.selectedType.toString() === 'VEHICLE'
    ) {
      this.onSelect.emit({
        center1: this.selectedType.toString(),
        center2: '0',
        center2Name: '',
      });
    }
  }
  onPelakChange(event: any) {
    this.onSelect.emit({
      center1: this.selectedType,
      center2: event.id,
      center2Name:
        'ایران' +
        event.registerFormat.columnFour +
        ' - ' +
        event.registerFormat.columnThree +
        event.registerFormat.columnTwo +
        event.registerFormat.columnOne,
    });
  }

  onSelectedDriver(event: any) {
    this.onSelect.emit({
      center1: this.selectedType,
      center2: event.driverId,
      center2Name: event.driverFullName,
    });
  }
  onSelectedOffice(event: any) {
    this.onSelect.emit({
      center1: this.selectedType,
      center2: event.officeId,
      center2Name: event.officeName,
    });
  }
  onSelectedDriverCourier(event: any) {
    this.onSelect.emit({
      center1: this.selectedType,
      center2: event.driverId,
      center2Name: event.driverCourierFullName,
    });
  }
  onSelectedMarketer(event: any) {
    this.onSelect.emit({
      center1: this.selectedType,
      center2: event.driverId,
      center2Name: event.driverCourierFullName,
    });
  }
}
