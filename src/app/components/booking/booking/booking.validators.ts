import {
  FormControl,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';

type ValidatorName =
  | 'originCity'
  | 'senderMobile'
  | 'destinationCity'
  | 'senderFullName'
  | 'senderPostalCode'
  | 'senderNationalCode'
  | 'receiverFullName'
  | 'receiverMobile'
  | 'receiverPostalCode'
  | 'receiverStation'
  | 'senderStation'
  | 'print'
  | 'marketerCommissionAmount'
  | 'packingFeeAmount'
  | 'unknownCourierAmount'
  | 'insuranceAmount';
type AuthenticationValidator = Record<Required<ValidatorName>, ValidatorFn[]>;

export const BookingValidator: AuthenticationValidator = {
  originCity: [Validators.required],
  senderMobile: [Validators.required, Validators.pattern('^09[0-9]{9}$')],
  destinationCity: [Validators.required],
  senderFullName: [Validators.required],
  senderPostalCode: [Validators.minLength(10), Validators.maxLength(10)],
  senderStation: [Validators.required],
  senderNationalCode: [
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.required,
  ],
  receiverFullName: [Validators.required],
  receiverStation: [Validators.required],
  receiverMobile: [Validators.required, Validators.pattern('^09[0-9]{9}$')],
  receiverPostalCode: [Validators.minLength(10), Validators.maxLength(10)],
  print: [Validators.required],
  marketerCommissionAmount: [Validators.required],
  packingFeeAmount: [Validators.required],
  unknownCourierAmount: [Validators.required],
  insuranceAmount: [Validators.required],
};
