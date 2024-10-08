import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Subject } from 'rxjs';

export type CoreSidePanelConfig = {
  width?: string;
  data?: any;
};

@Injectable({
  providedIn: 'root',
})
export class CoreSidePanel {
  private currentConfig: BehaviorSubject<CoreSidePanelConfig | undefined> =
    new BehaviorSubject<any>(undefined);
  afterClosed: Subject<any> = new Subject<any>();
  private currentComponent: Type<any> | undefined;

  get selectedComponent() {
    return this.currentComponent;
  }
  get selectedConfig() {
    return this.currentConfig;
  }

  constructor() {}

  public async open(component: Type<any>, config?: CoreSidePanelConfig) {
    this.currentConfig.next(config);
    this.currentComponent = component;
  }
  public async closeAll() {
    this.currentComponent = undefined;
    this.currentConfig.next(undefined);
  }
}
