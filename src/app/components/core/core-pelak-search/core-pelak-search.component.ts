import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import { VehicleSearchModalComponent } from './vehicle-search-modal/vehicle-search-modal.component';

@Component({
  selector: 'core-pelak-search',
  templateUrl: './core-pelak-search.component.html',
  styleUrls: ['./core-pelak-search.component.scss'],
})
export class CorePelakSearchComponent {
  @Output() onSelect: EventEmitter<VehicleDM> = new EventEmitter();
  @Input() canHighlightBackground = false;
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Input() defaultValue: VehicleDM | undefined = undefined;
  selectedVehicle: VehicleDM = {} as VehicleDM;
  constructor(private niraModalService: NiraModalService) {}

  ngOnInit(): void {
    if (this.defaultValue) {
      this.inputFormControl.setValue(
        this.defaultValue.vehicleType?.vehicleTypeNameFa
      );
      this.selectedVehicle = this.defaultValue;
      this.onSelect.emit(this.defaultValue);
    }
  }
  showSelectVehicleModal() {
    const modal = this.niraModalService.open(VehicleSearchModalComponent, {
      outsideClose: true,
    });
    modal.afterClosed.subscribe((vehicle) => {
      if (vehicle) {
        this.selectedVehicle = vehicle;
        this.onSelect.emit(this.selectedVehicle);
      }
    });
  }
  focusOut() {
    setTimeout(() => {
      this.inputFormControl.markAsTouched();
    }, 100);
  }
}
