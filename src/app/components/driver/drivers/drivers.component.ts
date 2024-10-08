import { Component, OnInit } from '@angular/core';
import { NiraModalService } from 'nira-modal';
import { BehaviorSubject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { DriverCS } from 'src/app/store/componentStore/driverCS';
import DriverDM from 'src/app/store/dataModels/driverDM';
import { EditSquareIconComponent } from 'src/app/svg-icons/edit-square-icon/edit-square-icon.component';
import { COLUMNS_TYPES } from 'src/app/utils/constants';
import { DriverDetailViewerComponent } from '../../detail-viewer/driver-detail-viewer/driver-detail-viewer.component';
import { DriverFormComponent } from '../driver-form/driver-form.component';
import { IDriversLabel, Labels } from './drivers.label';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  labels: IDriversLabel =
    this.labelManagerService.getLabels<IDriversLabel>(Labels);
  searchText: string = '';
  loading = false;
  tableData: BehaviorSubject<DriverDM[]> = new BehaviorSubject<DriverDM[]>([]);
  columnsSchema = [
    {
      key: 'firstName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderFirstName,
    },
    {
      key: 'lastName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderLastName,
    },
    {
      key: 'mobilePhone',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderMobilePhone,
    },
    {
      key: 'nationalCode',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderNationalCode,
    },
    {
      key: 'gender',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderGender,
      data: {
        key: 'title',
      },
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableAction,
      data: [
        {
          title: this.labels.edit,
          component: EditSquareIconComponent,
        },
      ],
    },
  ];
  get drivers() {
    return this.driverCS.itemsWatch;
  }
  searchTextInTable() {
    const data = this.drivers.getValue();
    this.tableData.next(
      data.filter((driver: DriverDM) => {
        return (
          driver.firstName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          driver.lastName
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          driver.mobilePhone
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          driver.nationalCode
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase()) ||
          driver.gender?.title
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase())
        );
      })
    );
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private driverCS: DriverCS
  ) {}
  async ngOnInit() {
    this.drivers.subscribe(() => {
      this.searchTextInTable();
    });
    await this.getList();
  }
  async getList() {
    this.loading = true;
    try {
      await this.driverCS.doLoad(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
  onColumnClicked(data: { data: DriverDM; key: string }) {
    const dialog = this.niraModalService.open(DriverFormComponent, {
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
    const dialog = this.niraModalService.open(DriverFormComponent);
    dialog.afterClosed.subscribe((data) => {
      if (data === 'true') {
        this.getList();
      }
    });
  }
}
