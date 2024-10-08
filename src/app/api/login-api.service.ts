import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async Login(userName: string, password: string) {
    const params = {
      UserID: userName,
      Passwd: password,
    };
    return await this.httpRequest.POST('/Security/Auth/OfficeLogin', params);
  }
}
