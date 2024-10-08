import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import CityDM from 'src/app/store/dataModels/cityDM';
import DriverDM from 'src/app/store/dataModels/driverDM';
import { IDriverLabel, Labels } from '../core-driver.label';

@Component({
  selector: 'app-driver-selector-modal',
  templateUrl: './driver-selector-modal.component.html',
  styleUrls: ['./driver-selector-modal.component.scss'],
})
export class DriverSelectorModalComponent implements IModal {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;

  selectedItem: DriverDM | undefined = undefined;
  filteredDrivers: BehaviorSubject<DriverDM[]> = new BehaviorSubject<
    DriverDM[]
  >([]);
  searchText = '';
  loading = false;

  labels = this.labelManagerService.getLabels<IDriverLabel>(Labels);
  get drivers() {
    return this.driverCS.itemsWatch;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private driverCS: DriverCS
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getList();
    this.changeSearchText();
  }

  async getList() {
    this.loading = true;
    try {
      await this.driverCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  async changeSearchText() {
    this.filteredDrivers.next(
      this.drivers
        .getValue()
        .filter(
          (driver) =>
            driver.firstName.includes(this.searchText) ||
            driver.lastName.includes(this.searchText) ||
            driver.mobilePhone.includes(this.searchText) ||
            driver.nationalCode.includes(this.searchText)
        )
    );
  }

  onClick(driver: DriverDM) {
    this.selectedItem = driver;
    this.closeSubject.next(driver);
  }
}
