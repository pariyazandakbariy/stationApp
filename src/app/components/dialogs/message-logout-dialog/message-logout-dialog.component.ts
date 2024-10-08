import { Component, Input } from '@angular/core';
import {
  IMessageDialogLabel,
  MessageLabels,
} from './message-logout-dialog.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { Subject } from 'rxjs';
import { NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-logout-dialog',
  templateUrl: './message-logout-dialog.component.html',
  styleUrls: ['./message-logout-dialog.component.scss'],
})
export class MessageLogoutDialogComponent {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  labels: IMessageDialogLabel =
    this.labelManagerService.getLabels<IMessageDialogLabel>(MessageLabels);

  constructor(
    private labelManagerService: LabelManagerService,
    private niraSnackBarService: NiraSnackBarService,
    private router: Router
  ) {}

  onLogout() {
    this.niraSnackBarService.show('کاربر با موفقیت خارج شد', {
      duration: 3000,
      horizontalPosition: 'bottom',
      verticalPosition: 'center',
      statusClass: 'success',
    });
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.close();
  }
  close() {
    this.closeSubject.next('true');
  }
}
