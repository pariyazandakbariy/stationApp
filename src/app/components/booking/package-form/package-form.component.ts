import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import PackageInfoDM from 'src/app/store/dataModels/packageInfoDM';
import { PackageTypeCS } from 'src/app/store/componentStore/packageTypeCS';
import { PackageSizeTypeCS } from 'src/app/store/componentStore/packageSizeTypeCS';
import PackageSizeTypeDM from 'src/app/store/dataModels/packageSizeTypeDM';
import { ExceptionTypeCS } from 'src/app/store/componentStore/exceptionTypeCS';
import PackageTypeDM from 'src/app/store/dataModels/packageTypeDM';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { IBookingLabel, Labels } from '../booking/booking.label';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss'],
})
export class PackageFormComponent {
  @Input() index: number = 0;
  @Input() packageInfoLength: number = 0;
  @Input() packageInfo!: PackageInfoDM;
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Output() removeEmit = new EventEmitter<number>();
  labels: IBookingLabel = {} as IBookingLabel;
  get isSizeManually() {
    return this.packageInfo.packageSizeType?.manualDimensions;
  }
  filteredPackageSizeTypes: BehaviorSubject<PackageSizeTypeDM[]> =
    new BehaviorSubject<PackageSizeTypeDM[]>([]);
  defaultPackageSizeTypeId: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  myForm: FormGroup = new FormGroup({
    formControlCount: new FormControl('', Validators.required),
    formControlWeight: new FormControl('', Validators.required),
    formControlPackageType: new FormControl('', Validators.required),
    formControlExceptionType: new FormControl('', Validators.required),
  });

  get packageTypes() {
    return this.packageTypeCS.itemsWatch;
  }
  get packageSizeTypes() {
    return this.packageSizeTypeCS.itemsWatch;
  }
  get exceptionTypes() {
    return this.exceptionTypeCS.itemsWatch;
  }

  constructor(
    private labelManagerService: LabelManagerService,
    private packageTypeCS: PackageTypeCS,
    private exceptionTypeCS: ExceptionTypeCS,
    private packageSizeTypeCS: PackageSizeTypeCS
  ) {}

  ngOnInit(): void {
    this.labels = this.labelManagerService.getLabels<IBookingLabel>(Labels);
  }

  ngAfterViewInit(): void {
    this.fillForm();
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
    this.inputFormControl.reset();
    this.checkForm();
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

  checkForm() {
    if (this.myForm.valid) this.inputFormControl.setValue('success');
  }

  fillForm() {
    this.myForm
      .get('formControlWeight')
      ?.setValue(this.packageInfo.packageWeight);
    this.myForm.get('formControlCount')?.setValue(this.packageInfo.QTY);
    this.myForm
      .get('formControlLength')
      ?.setValue(this.packageInfo.packageSize.x);
    this.myForm
      .get('formControlWidth')
      ?.setValue(this.packageInfo.packageSize.y);
    this.myForm
      .get('formControlHeight')
      ?.setValue(this.packageInfo.packageSize.z);
    this.checkForm();
  }

  remove() {
    this.removeEmit.emit(this.index);
  }
}
