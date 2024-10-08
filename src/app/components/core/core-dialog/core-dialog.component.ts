import { Component } from '@angular/core';
import { CoreDialog } from 'src/app/services/core-dialog.service';

@Component({
  selector: 'app-core-dialog',
  templateUrl: './core-dialog.component.html',
  styleUrls: ['./core-dialog.component.scss'],
})
export class CoreDialogComponent {
  get selectedComponent() {
    return this.coreDialog.selectedComponent;
  }
  get selectedConfig() {
    return this.coreDialog.selectedConfig;
  }

  constructor(private coreDialog: CoreDialog) {}

  onRootClicked() {
    this.coreDialog.closeAll();
  }
  onPanelClicked(event: Event) {
    event.stopPropagation();
  }
}
