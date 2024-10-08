import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityDS } from '../dataStore/cityDS';
import { ServiceApiService } from 'src/app/api/service-api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceCS {
  constructor(private serviceApiService: ServiceApiService) {}
  searchServiceById(code: string) {
    return this.serviceApiService.ServiceItems(code);
  }
}
