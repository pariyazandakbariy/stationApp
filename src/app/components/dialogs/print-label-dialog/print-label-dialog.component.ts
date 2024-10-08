import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { BillInformationApiService } from 'src/app/api/billInformation-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { PrinterCS } from 'src/app/store/componentStore/printerCS';
import PrinterDM from 'src/app/store/dataModels/printerDM';
import { IPrintLabelDialog, Labels } from './print-label-dialog.label';

@Component({
  selector: 'app-print-label-dialog',
  templateUrl: './print-label-dialog.component.html',
  styleUrls: ['./print-label-dialog.component.scss'],
})
export class PrintLabelDialogComponent {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  selectedPrinter: PrinterDM | undefined = undefined;
  isBill: boolean = false;
  billCode: string = '';
  uniqueKey: string = '';
  labels: IPrintLabelDialog =
    this.labelManagerService.getLabels<IPrintLabelDialog>(Labels);
  myForm: FormGroup = new FormGroup({
    formControlPrint: new FormControl('', Validators.required),
  });
  loading = false;
  get printers() {
    return this.printerCS.itemsWatch;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraSnackBarService: NiraSnackBarService,
    private printerCS: PrinterCS,
    private cdr: ChangeDetectorRef,
    private billInformationApiService: BillInformationApiService
  ) {}

  ngAfterViewInit(): void {
    if (localStorage.getItem('selectedPrinter') !== null) {
      this.selectedPrinter = JSON.parse(
        localStorage.getItem('selectedPrinter')!
      );
    } else {
      this.selectedPrinter = this.printers.value[0];
    }
    this.cdr.detectChanges();
  }
  ngOnInit(): void {
    this.isBill = this.config.data.isBill;
    if (this.isBill) {
      this.billCode = this.config.data.billCode;
    } else {
      this.uniqueKey = this.config.data.uniqueKey;
    }
  }

  onPrinterSelect(printer: PrinterDM) {
    this.selectedPrinter = printer;
  }
  async onSubmit() {
    if (this.selectedPrinter == undefined) return;

    localStorage.setItem(
      'selectedPrinter',
      JSON.stringify(this.selectedPrinter)
    );
    this.loading = true;
    try {
      if (this.isBill) {
        await this.billInformationApiService.PrintBillLabels(
          this.selectedPrinter.printerNo,
          this.billCode
        );
      } else {
        await this.billInformationApiService.PrintBillItemLabel(
          this.selectedPrinter.printerNo,
          this.uniqueKey
        );
      }
    } catch (error) {
      console.error(error);
    }
    this.loading = false;

    this.close();
  }
  close() {
    this.closeSubject.next('true');
  }
}
