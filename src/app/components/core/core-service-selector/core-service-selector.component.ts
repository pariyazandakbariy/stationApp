import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NiraModalService } from 'nira-modal';
import CityDM from 'src/app/store/dataModels/cityDM';
import ServiceDM from 'src/app/store/dataModels/serviceDM';
import { CoreServiceSelectorModalComponent } from './core-service-selector-modal/core-service-selector-modal.component';

@Component({
  selector: 'core-service-selector',
  templateUrl: './core-service-selector.component.html',
  styleUrls: ['./core-service-selector.component.scss'],
})
export class CoreServiceSelectorComponent {
  @Output() onSelect: EventEmitter<ServiceDM> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Input() defaultValue: ServiceDM | undefined = undefined;
  @Input() city: CityDM | undefined = undefined;
  selectedService: ServiceDM = {} as ServiceDM;
  constructor(private niraModalService: NiraModalService) {}

  ngOnInit(): void {
    if (this.defaultValue) {
      this.inputFormControl.setValue(this.defaultValue);
      this.selectedService = this.defaultValue;
      this.onSelect.emit(this.defaultValue);
    }
  }

  showSelectServiceModal() {
    const modal = this.niraModalService.open(
      CoreServiceSelectorModalComponent,
      {
        outsideClose: true,
        data: this.city,
      }
    );
    modal.afterClosed.subscribe((service: ServiceDM) => {
      if (service) {
        this.selectedService = service;
        this.inputFormControl.setValue(this.selectedService.serviceNo);
        this.onSelect.emit(service);
      }
    });
  }

  focusOut() {
    setTimeout(() => {
      this.inputFormControl.markAsTouched();
    }, 100);
  }
}
