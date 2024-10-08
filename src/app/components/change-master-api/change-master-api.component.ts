import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NiraSnackBarService } from 'nira-snack-bar';

@Component({
  selector: 'app-change-master-api',
  templateUrl: './change-master-api.component.html',
  styleUrls: ['./change-master-api.component.scss'],
})
export class ChangeMasterApiComponent {
  url = '';
  masterApiFormControl = new FormControl();

  constructor(
    private niraSnackBarService: NiraSnackBarService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const path = this.router.snapshot.routeConfig?.path;
    if (path === 'debug-mode') {
      localStorage.setItem('masterApi', 'http://127.0.0.1:8000');
      this.showToast();
    } else if (path === 'production-mode') {
      localStorage.removeItem('masterApi');
      this.showToast();
    }
    const masterApi = localStorage.getItem('masterApi');
    if (masterApi) {
      this.url = masterApi;
      this.masterApiFormControl.setValue(this.url);
    }
  }

  setChangeApi() {
    localStorage.setItem('masterApi', this.url);
    this.showToast();
  }

  resetApi() {
    localStorage.removeItem('masterApi');
    this.url = '';
    this.masterApiFormControl.setValue(this.url);
    this.showToast();
  }

  showToast() {
    this.niraSnackBarService.show('با موفقیت انجام شد', {
      duration: 3000,
      statusClass: 'success',
    });
  }
}
