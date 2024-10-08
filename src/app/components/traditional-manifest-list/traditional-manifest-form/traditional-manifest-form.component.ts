import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { ConfirmDialog } from 'src/app/utils/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { cloneDeep } from 'lodash';
import {
  IManifestByDate,
  Labels,
} from '../traditional-manifest-by-date/traditional-manifest-by-date.label';
import TraditionalManifestDM from 'src/app/store/dataModels/traditionalManifestDM';
import { TraditionalManifestCS } from 'src/app/store/componentStore/traditinalManifestCS';
import { Util } from 'src/app/utils/util';
import { ServiceCS } from 'src/app/store/componentStore/serviceCS';

@Component({
  selector: 'app-traditional-manifest-form',
  templateUrl: './traditional-manifest-form.component.html',
  styleUrls: ['./traditional-manifest-form.component.scss'],
})
export class TraditionalManifestFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels: IManifestByDate =
    this.labelManagerService.getLabels<IManifestByDate>(Labels);

  traditionalManifest: TraditionalManifestDM = new TraditionalManifestDM();
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
    formControlService: new FormControl('', Validators.required),
    formControlManifestNumber: new FormControl('', Validators.required),
    formControlManifestDateTime: new FormControl('', Validators.required),
    formControlOriginCity: new FormControl('', Validators.required),
  });

  get traditionalManifests() {
    return this.traditionalManifestCS.itemsWatch;
  }
  get services() {
    return this.serviceCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private traditionalManifestCS: TraditionalManifestCS,
    private serviceCS: ServiceCS
  ) {}

  async ngOnInit(): Promise<void> {
    this.serviceCS.doLoad(true);
    if (this.config.data) {
      const traditionalManifest = this.traditionalManifestCS.items.find(
        (traditionalManifest) =>
          traditionalManifest.traditionalManifestId ===
          this.config.data.data.traditionalManifestId
      );
      if (traditionalManifest) {
        this.traditionalManifest = cloneDeep(traditionalManifest);
      }

      this.myForm.setValue({
        formControlService: this.traditionalManifest?.service,
        formControlManifestNumber: this.traditionalManifest?.manifestNumber,
        formControlManifestDateTime: this.traditionalManifest?.manifestDateTime,
        formControlOriginCity: this.traditionalManifest.originCity
          ? this.traditionalManifest.originCity.cityNameFa
          : '',
      });
    }
  }

  async delete() {
    this.loadingDelete = true;
    try {
      await this.traditionalManifestCS.delete(this.traditionalManifest);
      this.close('true');
    } catch (error) {
      console.error(error);
    }
    this.loadingDelete = false;
  }

  async submitBtn() {
    if (this.myForm.valid) {
      this.loading = true;
      this.traditionalManifest.manifestDateTime = Util.shamsiToMiladi(
        this.myForm.controls['formControlManifestDateTime'].value!,
        'YYYY-MM-DD'
      );
      try {
        if (this.config.data) {
          await this.traditionalManifestCS.edit(this.traditionalManifest);
        } else {
          await this.traditionalManifestCS.add(this.traditionalManifest);
        }
        this.close('true');
      } catch (error) {
        console.error(error);
      }
    }
    this.loading = false;
  }

  close(data: string) {
    this.closeSubject.next(data);
  }
}
