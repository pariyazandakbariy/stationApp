import { Injectable, Type } from '@angular/core';
export type CoreDialogConfig = {
  width: string;
};
@Injectable({
  providedIn: 'root',
})
export class CoreDialog {
  private currentConfig: CoreDialogConfig | undefined;
  private currentComponent: Type<any> | undefined;

  get selectedComponent() {
    return this.currentComponent;
  }
  get selectedConfig() {
    return this.currentConfig;
  }
  constructor() {}

  public async open(component: Type<any>, config?: CoreDialogConfig) {
    this.currentComponent = component;
    this.currentConfig = config;
  }
  public async closeAll() {
    this.currentComponent = undefined;
    this.currentConfig = undefined;
  }
}
