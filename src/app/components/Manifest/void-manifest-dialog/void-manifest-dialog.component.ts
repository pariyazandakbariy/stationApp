import { Component, Input } from '@angular/core';
import { NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import {
  IVoidManifestDialog,
  VoidManifestDialogLabels,
} from './void-manifest-dialog.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { GenerateServiceApiService } from 'src/app/api/generateService-api.service';
import { NiraSnackBarService } from 'nira-snack-bar';

@Component({
  selector: 'app-void-manifest-dialog',
  templateUrl: './void-manifest-dialog.component.html',
  styleUrls: ['./void-manifest-dialog.component.scss'],
})
export class VoidManifestDialogComponent {
  labels = this.labelManagerService.getLabels<IVoidManifestDialog>(
    VoidManifestDialogLabels
  );

  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  loading = false;

  constructor(
    private labelManagerService: LabelManagerService,
    private generateServiceApiService: GenerateServiceApiService,
    private niraSnackBar: NiraSnackBarService
  ) {}
  close() {
    this.closeSubject.next(false);
  }

  async voidManifest() {
    this.loading = true;
    try {
      await this.generateServiceApiService.VoidManifest(this.config.data?.id);
      this.closeSubject.next(true);
    } catch (error) {
      console.log(error);
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
