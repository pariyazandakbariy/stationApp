import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { VehicleCS } from 'src/app/store/componentStore/vehicleCS';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import { IPelakSearchLabel, Labels } from '../core-pelak-search.label';

@Component({
  selector: 'app-vehicle-search-modal',
  templateUrl: './vehicle-search-modal.component.html',
  styleUrls: ['./vehicle-search-modal.component.scss'],
})
export class VehicleSearchModalComponent implements IModal {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  vehicles: BehaviorSubject<VehicleDM[]> = new BehaviorSubject<VehicleDM[]>([]);
  selectedItem: VehicleDM = {} as VehicleDM;
  labels = this.labelManagerService.getLabels<IPelakSearchLabel>(Labels);
  loading = false;
  register = '';
  constructor(
    private vehicleCS: VehicleCS,
    private labelManagerService: LabelManagerService
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    let vehicles: VehicleDM[] = [];
    this.loading = true;
    try {
      vehicles = await this.vehicleCS.vehicleInformation(this.register);
    } catch (error) {}
    this.vehicles.next(vehicles);
    this.loading = false;
  }
  async onPelakChange(event: string) {
    this.register = event;
    let vehicles: VehicleDM[] = [];
    this.loading = true;

    try {
      vehicles = await this.vehicleCS.vehicleInformation(event);
    } catch (error) {}
    this.vehicles.next(vehicles);
    this.loading = false;
  }

  onItemClick(vehicle: VehicleDM) {
    this.closeSubject.next(vehicle);
  }
}
