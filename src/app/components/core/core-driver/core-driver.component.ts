import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import DriverDM from 'src/app/store/dataModels/driverDM';
import { IDriverLabel, Labels } from './core-driver.label';
import { DriverSelectorModalComponent } from './driver-selector-modal/driver-selector-modal.component';

@Component({
  selector: 'core-driver',
  templateUrl: './core-driver.component.html',
  styleUrls: ['./core-driver.component.scss'],
})
export class CoreDriverComponent {
  @Output() onSelect: EventEmitter<DriverDM> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() canHighlightBackground = false;
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Input() defaultValue: number = 0;
  selectedDriver: DriverDM = {} as DriverDM;
  labels = this.labelManagerService.getLabels<IDriverLabel>(Labels);
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private driverCS: DriverCS
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.defaultValue != 0) {
      this.selectedDriver = await this.getDriverById(this.defaultValue);
      this.inputFormControl.setValue(
        this.selectedDriver.firstName + ' ' + this.selectedDriver.lastName
      );
      this.onSelect.emit(this.selectedDriver);
    }
  }

  async getDriverById(driverId: number): Promise<DriverDM> {
    return await this.driverCS.getDriverById(driverId);
  }

  showSelectDriverModal() {
    const modal = this.niraModalService.open(DriverSelectorModalComponent, {
      outsideClose: true,
    });
    modal.afterClosed.subscribe((driver) => {
      if (driver) {
        this.selectedDriver = driver;
        this.inputFormControl.setValue(
          this.selectedDriver.firstName + ' ' + this.selectedDriver.lastName
        );
        this.onSelect.emit(driver);
      }
    });
  }

  focusOut() {
    setTimeout(() => {
      this.inputFormControl.markAsTouched();
    }, 100);
  }
}
