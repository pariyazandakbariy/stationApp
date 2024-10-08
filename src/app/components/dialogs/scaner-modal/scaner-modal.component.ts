import { Component, Input, ViewChild } from '@angular/core';
import {
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';
import { NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ScannerMode } from 'src/app/utils/types';
import { IScannerLabelDialog, Labels } from './scanner-modal.label';

@Component({
  selector: 'app-scaner-modal',
  templateUrl: './scaner-modal.component.html',
  styleUrls: ['./scaner-modal.component.scss'],
})
export class ScannerModalComponent {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  labels: IScannerLabelDialog =
    this.labelManagerService.getLabels<IScannerLabelDialog>(Labels);

  scannerQRCodeConfig: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  };
  qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];
  percentage = 80;
  quality = 100;

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(
    private labelManagerService: LabelManagerService,
    private niraSnackBar: NiraSnackBarService
  ) {}

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    //https://nargo.nirasoft.ir/qr/bill/1234567890

    //https:nargo.nirasoft.ir/qr/pack/34ef3658-b24c-4829-9bdc-328be994db79
    const data = e[0].value;
    const splitData: string[] = data.split('/');
    const uniqueKey = splitData[splitData.length - 1];
    const scannerMode = splitData[splitData.length - 2];
    const qr = splitData[splitData.length - 3];
    if (qr !== 'QR') {
      this.niraSnackBar.show('یافت نشد', {
        statusClass: 'error',
        duration: 3000,
      });
      return;
    }
    if (
      (this.config.data.scannerMode === ScannerMode.BILL &&
        scannerMode === ScannerMode.BILL) ||
      (this.config.data.scannerMode === ScannerMode.PACK &&
        scannerMode === ScannerMode.PACK) ||
      this.config.data.scannerMode === ScannerMode.ALL
    ) {
      this.config.data.onEvent.next(uniqueKey);
      action.pause();
      setTimeout(() => {
        action.play();
      }, 2000);
      this.niraSnackBar.show('انجام شد', {
        statusClass: 'success',
        duration: 3000,
      });
    } else {
      this.niraSnackBar.show('یافت نشد', {
        statusClass: 'error',
        duration: 3000,
      });
    }
  }
  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find((f) =>
        /back|rear|environment/gi.test(f.label)
      ); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    };

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe(
        (r: any) => console.log(fn, r),
        alert
      );
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }
  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      this.handle(this.action, 'start');
    });
  }
  close() {
    this.action.stop();
    this.closeSubject.next('true');
  }
}
