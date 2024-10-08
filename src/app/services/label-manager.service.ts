import { Injectable } from '@angular/core';

export enum UserLanguage {
  EN = 'en',
  FA = 'fa',
}

@Injectable({ providedIn: 'root' })
export class LabelManagerService {
  private _language: UserLanguage = UserLanguage.FA;
  get language() {
    return this._language;
  }

  set language(language: UserLanguage) {
    this._language = language;
  }
  getLabels<T>(componentLabels: any):T {
    return componentLabels[this._language];
  }
}
