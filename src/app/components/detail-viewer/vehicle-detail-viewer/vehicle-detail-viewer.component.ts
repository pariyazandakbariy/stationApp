import { Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { VehicleCS } from 'src/app/store/componentStore/vehicleCS';
import VehicleDM from 'src/app/store/dataModels/vehicleDM';
import { IVehicleDetailViewer, Labels } from './vehicle-detail-viewer.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ConfirmDialog, ErrorType } from 'src/app/utils/types';

@Component({
  selector: ' ',
  templateUrl: './vehicle-detail-viewer.component.html',
  styleUrls: ['./vehicle-detail-viewer.component.scss'],
})
export class VehicleDetailViewerComponent {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<IVehicleDetailViewer>(Labels);
  loading = false;
  error: ErrorType | undefined = undefined;
  vehicleInformation: VehicleDM | undefined = undefined;

  constructor(
    private vehicleCS: VehicleCS,
    private labelManagerService: LabelManagerService
  ) {}
  async ngOnInit() {
    await this.getVehicle(0);
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
  async getVehicle(vehicleId: number) {
    this.loading = true;
    try {
      this.vehicleInformation = await this.vehicleCS.vehicleById(vehicleId);
    } catch (error: any) {
      this.error = error;
    }
    this.loading = false;
  }
}
