import { Injectable } from '@angular/core';
import { JsonParser } from '../utils/jsonparser';
import { lastValueFrom } from 'rxjs';
import UserDM from '../store/dataModels/userDM';
import { HttpRequestService } from '../services/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  users: UserDM[] = [];
  constructor(private httpRequest: HttpRequestService) {}
}
