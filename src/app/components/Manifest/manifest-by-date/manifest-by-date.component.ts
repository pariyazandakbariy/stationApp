import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { IManifestByDate, Labels } from './manifest-by-date.label';
import { Util } from 'src/app/utils/util';
import { Router } from '@angular/router';
import { NiraModalService } from 'nira-modal';
import { ServicesManifestDialogComponent } from '../service-manifest-dialog/services-manifest-dialog.component';
import ManifestDM from 'src/app/store/dataModels/manifestDM';
import { PreviewIconComponent } from 'src/app/svg-icons/preview-icon/preview-icon.component';
import { ManifestCS } from 'src/app/store/componentStore/manifestCS';
import { PrintIconComponent } from 'src/app/svg-icons/print-icon/print-icon.component';
import { Links } from 'src/app/utils/links';
import { ServiceDetailViewerComponent } from '../../detail-viewer/service-detail-viewer/service-detail-viewer.component';
import { DeleteIconComponent } from 'src/app/svg-icons/delete-icon/delete-icon.component';
import { ConfirmDialog } from 'src/app/utils/types';
import { CoreConfirmDialogComponent } from '../../core/core-confirm-dialog/core-confirm-dialog.component';
import { VoidManifestDialogComponent } from '../void-manifest-dialog/void-manifest-dialog.component';

@Component({
  selector: 'app-manifest-by-date',
  templateUrl: './manifest-by-date.component.html',
  styleUrls: ['./manifest-by-date.component.scss'],
})
export class ManifestByDateComponent {
  labels = this.labelManagerService.getLabels<IManifestByDate>(Labels);
  searchText: string = '';
  loading = false;
  manifestByDateForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  tableData: BehaviorSubject<ManifestDM[]> = new BehaviorSubject<ManifestDM[]>(
    []
  );
  columnsSchema = [
    {
      key: 'manifestId',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableManifestId,
      copyToClipboard: true,
    },
    {
      key: 'serviceCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableServiceCode,
      detailViewer: {
        key: 'serviceCode',
        detailViewerComponent: ServiceDetailViewerComponent,
      },
    },
    {
      key: 'originCity',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableOriginCity,
      data: {
        key: 'cityNameFa',
      },
    },
    {
      key: 'originOffice',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableOriginOffice,
      data: {
        key: 'officeName',
      },
    },
    {
      key: 'manifestDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableManifestDateTime,
    },
    {
      key: 'destinationCity',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableDestinationCity,
      data: {
        key: 'cityNameFa',
      },
    },
    {
      key: 'destinationOffice',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableDestinationOffice,
      data: {
        key: 'officeName',
      },
    },
    {
      key: 'manifestItemLength',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableManifestItemLength,
    },
    {
      key: 'issuerUserCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableIssuerUserCode,
    },
    {
      key: 'manifestStatus',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableStatus,
      data: {
        key: 'statusName',
      },
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableHeaderAction,
      data: [
        {
          key: 'detail',
          title: this.labels.detail,
          component: PreviewIconComponent,
        },
        {
          key: 'print',
          title: this.labels.print,
          component: PrintIconComponent,
        },
        {
          key: 'void',
          title: this.labels.void,
          component: DeleteIconComponent,
        },
      ],
    },
  ];

  get manifestByDateList() {
    return this.manifestCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.manifestByDateList.getValue();
    this.tableData.next(
      data.filter((manifestByDate) => {
        return (
          manifestByDate.manifestId
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.serviceCode
            .toString()
            .toLocaleLowerCase()
            .includes(this.searchText.toString().toLocaleLowerCase()) ||
          manifestByDate.manifestDateTime
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.issuerUserCode
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.destinationOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.destinationCity?.cityNameFa
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.originCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          manifestByDate.originOffice?.officeName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }

  async getList() {
    this.loading = true;
    try {
      await this.manifestCS.doLoad(true, {
        fromDate: Util.shamsiToMiladi(
          this.manifestByDateForm.controls['fromDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        toDate: Util.shamsiToMiladi(
          this.manifestByDateForm.controls['toDateFormControl'].value,
          'YYYY-MM-DD'
        ),
      });
    } catch (error) {
      console.log(error);
      if (error === '204') {
        this.manifestCS.deleteAllItems();
      }
    }
    this.loading = false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private manifestCS: ManifestCS,
    private router: Router,
    private niraModalService: NiraModalService
  ) {}

  async ngAfterViewInit(): Promise<void> {
    this.manifestByDateList.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }

  onSubmit() {
    this.getList();
  }

  onColumnClicked(data: { data: ManifestDM; key: string }) {
    if (data.key === 'detail') {
      this.niraModalService.open(ServicesManifestDialogComponent, {
        data: data.data,
      });
    } else if (data.key === 'print') {
      this.router.navigate([
        Links.printManifest.route + '/' + data.data.manifestId,
      ]);
    } else if (data.key === 'void') {
      const confirmDialog = this.niraModalService.open(
        VoidManifestDialogComponent,
        {
          data: data.data,
        }
      );

      confirmDialog.afterClosed.subscribe((data) => {
        if (data) {
          this.getList();
        }
      });
    }
  }
}
