import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { IPrintersLabel, PrintersLabels } from '../printers/printers.label';
import PrinterDM from 'src/app/store/dataModels/printerDM';
import { ConfirmDialog } from 'src/app/utils/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { PrinterCS } from 'src/app/store/componentStore/printerCS';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-printer-form',
  templateUrl: './printer-form.component.html',
  styleUrls: ['./printer-form.component.scss'],
})
export class PrinterFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: IPrintersLabel =
    this.labelManagerService.getLabels<IPrintersLabel>(PrintersLabels);

  printer: PrinterDM = new PrinterDM();
  loading = false;
  loadingDelete = false;
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  selectedCityKey: string | null = null;

  myForm: FormGroup = new FormGroup({
    formControlType: new FormControl('', Validators.required),
    formControlName: new FormControl('', Validators.required),
    formControlChannel: new FormControl('', Validators.required),
    formControlBrand: new FormControl('', Validators.required),
    formControlModel: new FormControl('', Validators.required),
    formControlPrinterNo: new FormControl('', Validators.required),
    formControlDriverAddress: new FormControl('', Validators.required),
  });

  get printers() {
    return this.printerCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private printerCS: PrinterCS
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.config.data) {
      const printer = this.printerCS.items.find(
        (printer) =>
          printer.officePrinterID === this.config.data.data.officePrinterID
      );
      if (printer) {
        this.printer = cloneDeep(printer);
      }

      this.myForm.setValue({
        formControlType: this.printer.type,
        formControlName: this.printer.name,
        formControlChannel: this.printer.channel,
        formControlBrand: this.printer.brand,
        formControlModel: this.printer.model,
        formControlPrinterNo: this.printer.printerNo,
        formControlDriverAddress: this.printer.driverAddress,
      });
    }
  }

  async delete() {
    this.loadingDelete = true;
    try {
      await this.printerCS.delete(this.printer);
      this.close('true');
    } catch (error) {
      console.error(error);
    }
    this.loadingDelete = false;
  }

  async submitBtn() {
    if (this.myForm.valid) {
      this.loading = true;

      try {
        if (this.config.data) {
          await this.printerCS.edit(this.printer);
        } else {
          await this.printerCS.add(this.printer);
        }
      } catch (error) {
        console.error(error);
      }
      this.close('true');
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
}
