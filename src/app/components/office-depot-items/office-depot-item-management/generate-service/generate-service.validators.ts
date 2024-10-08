import {
  FormControl,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';

type ValidatorName =
  | 'company'
  | 'serviceNumber'
  | 'originCity'
  | 'destinationCity'
  | 'originStation'
  | 'destinationStation'
  | 'vehicleType'
  | 'fromDate'
  | 'toDate'
  | 'receiveTime'
  | 'driver'
  | 'departureTime';
type ServiceValidator = Record<Required<ValidatorName>, ValidatorFn[]>;

export const ServiceValidator: ServiceValidator = {
  company: [Validators.required],
  serviceNumber: [],
  originCity: [Validators.required],
  destinationCity: [Validators.required],
  originStation: [Validators.required],
  destinationStation: [Validators.required],
  vehicleType: [Validators.required],
  fromDate: [Validators.required],
  toDate: [Validators.required],
  receiveTime: [],
  driver: [],
  departureTime: [Validators.required],
};
