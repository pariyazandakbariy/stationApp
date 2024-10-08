import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import MyInfoDM from './dataModels/myInfoDM';

@Injectable({
  providedIn: 'root',
})
export class ApplicationDS {
  myInfo: MyInfoDM | undefined = undefined;
  constructor() {}
}
