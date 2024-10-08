import { Injectable } from '@angular/core';
export type CoreSnakBarConfig = {
  width?: string;
  horizontalPosition?: 'top' | 'bottom' | 'center';
  verticalPosition?: 'left' | 'right' | 'center';
  statusClass: 'error' | 'warning' | 'success' | 'info';
};

@Injectable({
  providedIn: 'root',
})
export class CoreSnakbar {
  private currentConfig: CoreSnakBarConfig | undefined;
  private currentMessage: string | undefined;

  get message() {
    return this.currentMessage;
  }
  get selectedConfig() {
    return this.currentConfig;
  }
  constructor() {}
  public async open(message: string, config?: CoreSnakBarConfig) {
    this.currentMessage = message;
    this.currentConfig = config;
  }
  public async closeAll() {
    this.currentMessage = undefined;
    this.currentConfig = undefined;
  }
}
