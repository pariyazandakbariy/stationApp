import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig, NiraModalService } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import DriverDM from 'src/app/store/dataModels/driverDM';
import { DriverFormComponent } from '../../driver/driver-form/driver-form.component';
import { IDriverDetailViewer, Labels } from './driver-detail-viewer.label';
import { ErrorType } from 'src/app/utils/types';

@Component({
  selector: 'app-driver-detail-viewer',
  templateUrl: './driver-detail-viewer.component.html',
  styleUrls: ['./driver-detail-viewer.component.scss'],
})
export class DriverDetailViewerComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<IDriverDetailViewer>(Labels);
  loading = false;
  driver: DriverDM | undefined = undefined;
  error: ErrorType | undefined = undefined;

  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private driverCS: DriverCS
  ) {}

  ngOnInit() {
    this.getDriver();
  }

  async getDriver() {
    this.loading = true;
    try {
      this.driver = await this.driverCS.getDriverById(this.config.data);
    } catch (error: any) {
      this.error = error.error;
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }

  update() {
    this.onColumnClicked({
      data: this.driver!,
      key: String(this.config.data),
    });
  }

  onColumnClicked(data: { data: DriverDM; key: string }) {
    const dialog = this.niraModalService.open(DriverFormComponent, {
      data: data,
      outsideClose: false,
    });
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getDriver();
      }
    });
  }
}
