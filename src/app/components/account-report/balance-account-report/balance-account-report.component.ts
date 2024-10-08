import { Component, Input } from '@angular/core';
import {
  AccountReportLabels,
  IAccountReport,
} from '../account-report/account-report.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountReportApiService } from 'src/app/api/accountReport-api.service';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-balance-account-report',
  templateUrl: './balance-account-report.component.html',
  styleUrls: ['./balance-account-report.component.scss'],
})
export class BalanceAccountReportComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels =
    this.labelManagerService.getLabels<IAccountReport>(AccountReportLabels);
  constructor(private labelManagerService: LabelManagerService) {}

  close() {
    this.closeSubject.next('false');
  }

  getCenter1Name() {
    if (this.config.data.center2.toString() === '0') {
      if (this.config.data.center1 === 'VEHICLE') {
        return 'همه وسایل نقلیه ';
      } else if (this.config.data.center1 === 'OFFICE') {
        return 'همه دفاتر';
      } else if (this.config.data.center1 === 'MARKETER') {
        return 'همه بازاریاب ها';
      } else if (this.config.data.center1 === 'COURIER') {
        return 'همه پیک ها';
      } else if (this.config.data.center1 === '0') {
        return '';
      } else {
        return '';
      }
    } else {
      if (this.config.data.center1 === 'VEHICLE') {
        return 'وسیله نقلیه ';
      } else if (this.config.data.center1 === 'OFFICE') {
        return 'دفتر';
      } else if (this.config.data.center1 === 'MARKETER') {
        return 'بازاریاب';
      } else if (this.config.data.center1 === 'COURIER') {
        return 'پیک';
      } else if (this.config.data.center1 === '0') {
        return '';
      } else {
        return '';
      }
    }
  }

  getCenter2Name() {
    if (this.config.data.center2.toString() === '0') {
      return '';
    } else {
      return this.config.data.center2Name;
    }
  }
}
