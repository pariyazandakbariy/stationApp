import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NiraSnackBarService } from 'nira-snack-bar';
import { BehaviorSubject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import CityDM from 'src/app/store/dataModels/cityDM';
import { COLUMNS_TYPES } from 'src/app/utils/constants';

import { DeleteIconComponent } from 'src/app/svg-icons/delete-icon/delete-icon.component';
import { CoreSidePanel } from 'src/app/services/coreSidePanel.service';
import OfficeDepotItemDM from 'src/app/store/dataModels/officeDepotItemDM';
import { OfficeDepotItemApiService } from 'src/app/api/officeDepotItem-api.service';
import {
  IOfficeDepotItemManagement,
  Labels,
} from '../office-depot-item-management/office-depot-item-management.label';
import { OfficeDepotItemToTransferCS } from 'src/app/store/componentStore/officeDepotItemToTransferCS';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';
import PackageInfoDM from 'src/app/store/dataModels/packageInfoDM';
import PackageSizeTypeDM from 'src/app/store/dataModels/packageSizeTypeDM';
import { ExceptionTypeCS } from 'src/app/store/componentStore/exceptionTypeCS';
import { PackageTypeCS } from 'src/app/store/componentStore/packageTypeCS';
import PackageTypeDM from 'src/app/store/dataModels/packageTypeDM';
import { PackageSizeTypeCS } from 'src/app/store/componentStore/packageSizeTypeCS';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.scss'],
})
export class AggregationComponent {
  @Input() set data(value: OfficeDepotItemDM[]) {
    //
  }

  destinationStations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  destinationStation: OfficeDM = new OfficeDM();
  labels =
    this.labelManagerService.getLabels<IOfficeDepotItemManagement>(Labels);
  loading = false;
  isLeftPayment = true;
  totalWeight = 0;
  packageInfo: PackageInfoDM = new PackageInfoDM();
  filteredPackageSizeTypes: BehaviorSubject<PackageSizeTypeDM[]> =
    new BehaviorSubject<PackageSizeTypeDM[]>([]);
  defaultPackageSizeTypeId: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  get tableData() {
    return this.officeDepotItemCS.selectedAggregationItems;
  }
  get packageTypes() {
    return this.packageTypeCS.itemsWatch;
  }
  get exceptionTypes() {
    return this.exceptionTypeCS.itemsWatch;
  }
  get isSizeManually() {
    return this.packageInfo.packageSizeType?.manualDimensions;
  }
  get packageSizeTypes() {
    return this.packageSizeTypeCS.itemsWatch;
  }

  columnsSchema = [
    {
      key: 'itemNo',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderAggregateId,
    },
    {
      key: 'receiverName',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderAggregateDestinationName,
    },
    {
      key: 'destinationCity',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.tableHeaderAggregateDestinationCity,
      data: {
        key: 'cityNameFa',
      },
    },
    {
      key: 'weight',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.tableHeaderAggregateWeight,
    },
    {
      key: 'isLeftPayment',
      type: COLUMNS_TYPES.STATUS_ACTIVE,
      label: this.labels.tableHeaderLeftPayment,
    },
    {
      key: 'delete',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.tableHeaderAction,
      data: [
        {
          key: 'delete',
          title: this.labels.tableHeaderAction,
          component: DeleteIconComponent,
        },
      ],
    },
  ];
  myForm: FormGroup = new FormGroup({
    formControlDestinationCity: new FormControl('', Validators.required),
    formControlDestinationStation: new FormControl('', Validators.required),
    formControlPackageType: new FormControl('', Validators.required),
    formControlPackageTypeSize: new FormControl('', Validators.required),
    formControlExceptionType: new FormControl('', Validators.required),
  });

  constructor(
    private labelManagerService: LabelManagerService,
    private officeCS: OfficeCS,
    private niraSnackBar: NiraSnackBarService,
    private officeDepotItemApi: OfficeDepotItemApiService,
    private coreSidePanel: CoreSidePanel,
    private exceptionTypeCS: ExceptionTypeCS,
    private packageTypeCS: PackageTypeCS,
    private packageSizeTypeCS: PackageSizeTypeCS,
    private officeDepotItemCS: OfficeDepotItemToTransferCS
  ) {}

  ngOnInit(): void {
    this.tableData.subscribe((officeDepotItems: OfficeDepotItemDM[]) => {
      this.isLeftPayment = officeDepotItems.some(
        (officeDepotItem) => officeDepotItem.isLeftPayment
      );
      this.totalWeight = officeDepotItems.reduce(
        (acc, val) => acc + Number(val.weight),
        0
      );
    });
  }

  async onDestinationCityChange(city: CityDM) {
    this.destinationStations.next(await this.getStations(city));
  }

  async getStations(city: CityDM): Promise<OfficeDM[]> {
    let stations: OfficeDM[] = [];
    try {
      stations = await this.officeCS.getOfficesByCityId(city.cityId);
    } catch (error) {
      console.log(error);
    }
    return stations;
  }

  onColumnClicked(data: { data: OfficeDepotItemDM; key: string }) {
    const selectedAggregationItems =
      this.officeDepotItemCS.selectedAggregationItems.getValue();
    const index = selectedAggregationItems.findIndex(
      (officeDepotItem) => officeDepotItem.id === data.data.id
    );

    if (index >= 0) {
      selectedAggregationItems.splice(index, 1);
      this.officeDepotItemCS.selectedAggregationItems.next(
        selectedAggregationItems
      );
    }
  }
  onPackageTypeChange(packageType: PackageTypeDM) {
    this.defaultPackageSizeTypeId.next('');
    this.packageInfo.packageSizeType = undefined;
    this.onPackageSizeChange();
    this.packageSizeTypes
      .pipe(
        map((packageSizeTypes) =>
          packageSizeTypes.filter(
            (packageSizeType) =>
              packageSizeType.packageTypeCode === packageType.packageTypeID
          )
        )
      )
      .subscribe((res) => this.filteredPackageSizeTypes.next(res));
  }
  onPackageSizeChange() {
    if (this.myForm.get('formControlLength')) {
      this.myForm.removeControl('formControlLength');
      this.myForm.removeControl('formControlWidth');
      this.myForm.removeControl('formControlHeight');
    }
    if (this.isSizeManually) {
      this.myForm.addControl(
        'formControlLength',
        new FormControl('', Validators.required)
      );
      this.myForm.addControl(
        'formControlWidth',
        new FormControl('', Validators.required)
      );
      this.myForm.addControl(
        'formControlHeight',
        new FormControl('', Validators.required)
      );
    }
  }
  async onSubmit() {
    const uniqueKeys = this.tableData
      .getValue()
      .map((officeDepotItem) => officeDepotItem.itemUniqueKey);

    this.loading = true;
    try {
      await this.officeDepotItemApi.AggregateItems(
        this.destinationStation,
        this.packageInfo,
        uniqueKeys
      );
      this.coreSidePanel.afterClosed.next('close');
      this.coreSidePanel.closeAll();
    } catch (error) {
      let message = '';
      if (typeof error === 'string') {
        message = error.toString();
      } else if (error instanceof Error) {
        message = error.message;
      }
      this.niraSnackBar.show(message, {
        statusClass: 'error',
        duration: 3000,
      });
    }
    this.loading = false;
  }
}
