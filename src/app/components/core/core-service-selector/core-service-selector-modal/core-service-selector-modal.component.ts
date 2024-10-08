import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IModal, NiraModalConfig, NiraModalService } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ServiceByDateCS } from 'src/app/store/componentStore/serviceByDateCS';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { Util } from 'src/app/utils/util';
import { IServiceSelectorLabel, Labels } from '../core-service-selector.label';
import { GenerateServiceComponent } from 'src/app/components/office-depot-items/office-depot-item-management/generate-service/generate-service.component';

@Component({
  selector: 'app-core-service-selector-modal',
  templateUrl: './core-service-selector-modal.component.html',
  styleUrls: ['./core-service-selector-modal.component.scss'],
})
export class CoreServiceSelectorModalComponent implements IModal {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  filteredDrivers: BehaviorSubject<ServiceDM[]> = new BehaviorSubject<
    ServiceDM[]
  >([]);
  cityId: string = '';
  searchText = '';
  loading = false;
  selectedItem: ServiceDM | undefined = undefined;
  myForm: FormGroup = new FormGroup({
    fromDateFormControl: new FormControl('', Validators.required),
    toDateFormControl: new FormControl('', Validators.required),
  });
  labels = this.labelManagerService.getLabels<IServiceSelectorLabel>(Labels);
  get serviceByDateList(): BehaviorSubject<ServiceDM[]> {
    return this.serviceByDateCS.itemsWatch;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private serviceByDateCS: ServiceByDateCS,
    private niraModalService: NiraModalService
  ) {}

  ngOnInit(): void {
    this.cityId = this.config.data.cityId;
  }
  ngAfterViewInit(): void {
    this.getList();
  }

  onClick(service: ServiceDM) {
    this.selectedItem = service;
    this.closeSubject.next(service);
  }

  openFormModal() {
    this.niraModalService.open(GenerateServiceComponent);
  }
  onSubmit() {
    this.getList();
  }

  async getList() {
    this.loading = true;
    try {
      await this.serviceByDateCS.ServicesListByOriginOfficeCodeAndDate(true, {
        originCityCode: this.cityId,
        fromDate: Util.shamsiToMiladi(
          this.myForm.controls['fromDateFormControl'].value,
          'YYYY-MM-DD'
        ),
        toDate: Util.shamsiToMiladi(
          this.myForm.controls['toDateFormControl'].value,
          'YYYY-MM-DD'
        ),
      });
    } catch (error) {
      console.log(error);
      if (error === '204') {
        this.serviceByDateCS.deleteAllItems();
      }
    }
    this.loading = false;
  }
}
