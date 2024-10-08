import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NiraModalService } from 'nira-modal';
import { CitySelectorModalComponent } from '../city-selector-modal/city-selector-modal.component';
import CityDM from 'src/app/store/dataModels/cityDM';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'core-city-selector',
  templateUrl: './core-city-selector.component.html',
  styleUrls: ['./core-city-selector.component.scss'],
})
export class CoreCitySelectorComponent {
  @Output() onSelect: EventEmitter<CityDM> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() canHighlightBackground = false;
  @Input() inputFormControl: FormControl = new FormControl('', []);
  @Input() defaultValue: CityDM | undefined = undefined;
  selectedCity: CityDM = {} as CityDM;
  constructor(private niraModalService: NiraModalService) {}

  ngOnInit(): void {
    if (this.defaultValue) {
      this.inputFormControl.setValue(this.defaultValue.cityNameFa);
      this.selectedCity = this.defaultValue;
      this.onSelect.emit(this.defaultValue);
    }
  }
  showSelectCityModal() {
    const modal = this.niraModalService.open(CitySelectorModalComponent, {
      outsideClose: true,
    });
    modal.afterClosed.subscribe((city) => {
      if (city) {
        this.selectedCity = city;
        this.inputFormControl.setValue(this.selectedCity.cityNameFa);
        this.onSelect.emit(city);
      }
    });
  }

  focusOut() {
    setTimeout(() => {
      this.inputFormControl.markAsTouched();
    }, 100);
  }
}
