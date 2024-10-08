import { Component, OnInit } from '@angular/core';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { PrinterFormComponent } from '../printer-form/printer-form.component';
import { IPrintersLabel, PrintersLabels } from './printers.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { NiraModalService } from 'nira-modal';
import { PrinterCS } from 'src/app/store/componentStore/printerCS';
import PrinterDM from 'src/app/store/dataModels/printerDM';
import { BehaviorSubject, map } from 'rxjs';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss'],
})
export class PrintersComponent implements OnInit {
  labels: IPrintersLabel =
    this.labelManagerService.getLabels<IPrintersLabel>(PrintersLabels);
  searchText: string = '';
  loading = false;
  tableData: BehaviorSubject<PrinterDM[]> = new BehaviorSubject<PrinterDM[]>(
    []
  );
  columnsSchema = [
    {
      key: 'name',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderPrinterName,
    },
    {
      key: 'type',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderPrinterType,
    },

    {
      key: 'channel',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderChannel,
    },
    {
      key: 'brand',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderBrand,
    },
    {
      key: 'model',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderModel,
    },
    {
      key: 'printerNo',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderPrinterNo,
    },
    {
      key: 'driverAddress',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderDriverAddress,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableAction,
      data: [
        {
          key: 'edit',
          component: EditSquareIconComponent,
        },
      ],
    },
  ];
  get printers() {
    return this.printerCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.printers.getValue();
    this.tableData.next(
      data.filter((printer: PrinterDM) => {
        return (
          printer.type
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.name
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.channel
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.brand
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.model
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.driverAddress
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          printer.printerNo
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private printerCS: PrinterCS
  ) {}
  async ngOnInit() {
    this.printers.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }
  async getList() {
    this.loading = true;
    try {
      await this.printerCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
  onColumnClicked(data: { data: PrinterDM; key: string }) {
    const dialog = this.niraModalService.open(PrinterFormComponent, {
      data: data,
      outsideClose: false,
    });
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
  openFormModal() {
    const dialog = this.niraModalService.open(PrinterFormComponent);
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
}
