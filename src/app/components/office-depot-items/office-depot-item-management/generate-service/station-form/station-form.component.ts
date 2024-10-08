import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IModal, NiraModalConfig } from 'nira-modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import CityDM from 'src/app/store/dataModels/cityDM';
import { IStationForm, Labels } from './station-form.label';
import OfficeDM from 'src/app/store/dataModels/officeDM';
import { OfficeCS } from 'src/app/store/componentStore/officeCS';
import MinimalStationDM from 'src/app/store/dataModels/minimalDM/minimalStationDM';

@Component({
  selector: 'app-station',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss'],
})
export class StationFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<IStationForm>(Labels);
  destinationStations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  station: MinimalStationDM = new MinimalStationDM();
  myForm = new FormGroup({
    formControlDestinationCity: new FormControl('', Validators.required),
    formControlDestinationStation: new FormControl('', Validators.required),
    formControlStopTime: new FormControl('', Validators.required),
  });

  constructor(
    private labelManagerService: LabelManagerService,
    private officeCS: OfficeCS
  ) {}

  ngOnInit(): void {}

  async submit() {
    this.closeSubject.next(this.station);
  }

  close() {
    this.closeSubject.next(null);
  }
  async onDestinationCityChange(city: CityDM) {
    this.destinationStations.next(await this.getStations(city));
  }
  async getStations(city: CityDM): Promise<OfficeDM[]> {
    let stations: OfficeDM[] = [];
    try {
      stations = await this.officeCS.getOfficesByCityId(city.id);
    } catch (error) {
      console.log(error);
    }
    return stations;
  }
}
