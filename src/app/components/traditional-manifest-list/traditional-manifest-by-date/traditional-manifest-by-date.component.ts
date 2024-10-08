import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { IManifestByDate, Labels } from './traditional-manifest-by-date.label';
import { Util } from 'src/app/utils/util';
import { Router } from '@angular/router';
import { NiraModalService } from 'nira-modal';
import { PreviewIconComponent } from 'src/app/svg-icons/preview-icon/preview-icon.component';
import { TraditionalManifestCS } from 'src/app/store/componentStore/traditinalManifestCS';
import TraditionalManifestDM from 'src/app/store/dataModels/traditionalManifestDM';
import { TraditionalManifestModalComponent } from '../traditional-manifest-modal/traditional-manifest-modal.component';
import { TraditionalManifestFormComponent } from '../traditional-manifest-form/traditional-manifest-form.component';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';
import { ServiceDetailViewerComponent } from '../../detail-viewer/service-detail-viewer/service-detail-viewer.component';

@Component({
  selector: 'app-traditional-manifest-by-date',
  templateUrl: './traditional-manifest-by-date.component.html',
  styleUrls: ['./traditional-manifest-by-date.component.scss'],
})
export class TraditionalManifestByDateComponent {
  labels = this.labelManagerService.getLabels<IManifestByDate>(Labels);
  searchText: string = '';
  loading = false;
  traditionalManifestByDateForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  tableData: BehaviorSubject<TraditionalManifestDM[]> = new BehaviorSubject<
    TraditionalManifestDM[]
  >([]);
  columnsSchema = [
    {
      key: 'manifestNumber',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableTraditionalManifestID,
      copyToClipboard: true,
    },
    {
      key: 'service',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableServiceCode,
      data: {
        key: 'serviceId',
      },
      detailViewer: {
        key: 'serviceId',
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
      key: 'traditionalManifestItemLength',
      type: COLUMNS_TYPES.NUMBER,
      label: this.labels.tableTraditionalManifestItemLength,
      copyToClipboard: true,
    },
    {
      key: 'incomeDateTime',
      type: COLUMNS_TYPES.SHAMSI_DATE,
      label: this.labels.tableManifestDateTime,
    },
    {
      key: 'manifestStatus',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderStatus,
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
          key: 'edit',
          title: this.labels.edit,
          component: EditSquareIconComponent,
          filter: (traditionalManifest: TraditionalManifestDM) => {
            return traditionalManifest.manifestStatus?.status == 'REGISTERED';
          },
        },
      ],
    },
  ];

  get traditionalManifestByDateList() {
    return this.traditionalManifestCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.traditionalManifestByDateList.getValue();
    this.tableData.next(
      data.filter((traditionalManifestByDate) => {
        return (
          traditionalManifestByDate.traditionalManifestId
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          traditionalManifestByDate.service?.serviceId
            .toString()
            .toLocaleLowerCase()
            .includes(this.searchText.toString().toLocaleLowerCase()) ||
          traditionalManifestByDate.manifestDateTime
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          traditionalManifestByDate.originCity?.cityNameFa
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          traditionalManifestByDate.traditionalManifestItemLength
            .toString()
            .toLocaleLowerCase()
            .includes(this.searchText.toString().toLocaleLowerCase())
        );
      })
    );
  }

  async getList() {
    this.loading = true;
    try {
      const a = await this.traditionalManifestCS.doLoad(true, {
        fromDate: Util.shamsiToMiladi(
          this.traditionalManifestByDateForm.controls['fromDateFormControl']
            .value,
          'YYYY-MM-DD'
        ),
        toDate: Util.shamsiToMiladi(
          this.traditionalManifestByDateForm.controls['toDateFormControl']
            .value,
          'YYYY-MM-DD'
        ),
      });
      console.log(a);
    } catch (error) {
      console.log(error);
      if (error === '204') {
        this.traditionalManifestCS.deleteAllItems();
      }
    }
    this.loading = false;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private traditionalManifestCS: TraditionalManifestCS,
    private router: Router,
    private niraModalService: NiraModalService
  ) {}

  async ngAfterViewInit(): Promise<void> {
    this.traditionalManifestByDateList.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }

  onSubmit() {
    this.getList();
  }

  onColumnClicked(data: { data: TraditionalManifestDM; key: string }) {
    if (data.key === 'detail') {
      const dialog = this.niraModalService.open(
        TraditionalManifestModalComponent,
        {
          data: data.data,
        }
      );
      dialog.afterClosed.subscribe((data) => {
        if (data === 'true') {
          this.getList();
        }
      });
    } else if (data.key === 'edit') {
      const dialog = this.niraModalService.open(
        TraditionalManifestFormComponent,
        {
          data: data,
          outsideClose: false,
        }
      );
      dialog.afterClosed.subscribe((data) => {
        if (data === 'true') {
          this.getList();
        }
      });
    }
  }

  openFormModal() {
    const dialog = this.niraModalService.open(TraditionalManifestFormComponent);
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
}
