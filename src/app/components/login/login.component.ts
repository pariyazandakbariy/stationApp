import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginLabel, Labels } from './login.label';
import { LoginApiService } from 'src/app/api/login-api.service';
import { Links } from 'src/app/utils/links';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string = '';
  loading: boolean = false;
  get labels(): ILoginLabel {
    return Labels;
  }

  get Links() {
    return Links;
  }

  constructor(private router: Router, private loginApi: LoginApiService) {}
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
    rememberMe: new FormControl(false),
  });

  async login() {
    this.loading = true;
    const formValue = this.loginForm.value;
    const data: any = await this.loginApi.Login(
      formValue.username,
      formValue.password
    );
    if (data.errorCode === 0) {
      localStorage.setItem('authorization', data.result.Authorization);
      localStorage.setItem('cellPhone', data.result.CellPhone);
      localStorage.setItem('email', data.result.Email);
      localStorage.setItem('officeType', data.result.OfficeType);
      localStorage.setItem('officeCode', data.result.OfficeCode);
      localStorage.setItem('officeType', data.result.OfficeType);
      localStorage.setItem('userID', data.result.UserID);
      localStorage.setItem('isLogin', 'true');
      if (this.loginForm.valid) {
        this.router.navigate([this.Links.home.route]);
      }
    }
    this.loading = false;
  }
}
