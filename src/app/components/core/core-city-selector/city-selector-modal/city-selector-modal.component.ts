import { Component, Input } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { CityCS } from 'src/app/store/componentStore/cityCS';
import { StateCS } from 'src/app/store/componentStore/stateCS';
import CityDM from 'src/app/store/dataModels/cityDM';

@Component({
  selector: 'app-city-selector-modal',
  templateUrl: './city-selector-modal.component.html',
  styleUrls: ['./city-selector-modal.component.scss'],
})
export class CitySelectorModalComponent implements IModal {
  @Input() config!: NiraModalConfig;
  @Input() closeSubject!: Subject<any>;
  filteredStates: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchText = '';

  get states() {
    return this.stateCS.items;
  }

  get cities() {
    return this.cityCS.items;
  }
  constructor(private stateCS: StateCS, private cityCS: CityCS) {}

  ngOnInit(): void {
    this.changeSearchText();
  }

  async changeSearchText() {
    let result = [];
    for await (let state of this.states) {
      const cities = this.getCityByStates(state.countryStateID);
      if (cities.length > 0) {
        result.push({
          state: state,
          children: cities,
        });
      }
    }
    this.filteredStates.next(result);
  }

  getCityByStates(countryStateCode: string) {
    return this.cities.filter(
      (city) =>
        city.countryStateCode === countryStateCode &&
        city.cityNameFa.includes(this.searchText)
    );
  }
  selectCity(city: CityDM) {
    this.closeSubject.next(city);
  }
}
