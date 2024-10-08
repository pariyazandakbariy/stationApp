import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IModal, NiraModalConfig } from 'nira-modal';
import { NiraSnackBarService } from 'nira-snack-bar';
import { Subject } from 'rxjs';
import { BookApiService } from 'src/app/api/book-api.service';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { CityCS } from 'src/app/store/componentStore/cityCS';
import BookDM from 'src/app/store/dataModels/bookDM';
import { Links } from 'src/app/utils/links';
import { ISendRoutLabel, Labels } from './send-route.label';

@Component({
  selector: 'app-send-route',
  templateUrl: './send-route.component.html',
  styleUrls: ['./send-route.component.scss'],
})
export class SendRouteComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  book: BookDM = {} as BookDM;
  freightQuotes: any[] = [];
  selectedItem: any = {};
  loading = false;
  leftPayment = 0;
  totalPrice = 0;
  myForm: FormGroup;
  labels: ISendRoutLabel =
    this.labelManagerService.getLabels<ISendRoutLabel>(Labels);
  get Links() {
    return Links;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private bookApiService: BookApiService,
    private router: Router,
    private niraSnackBar: NiraSnackBarService,
    private cityCS: CityCS
  ) {
    this.myForm = new FormGroup({
      formControlLeftPayment: new FormControl('', [this.validatorLeftPayment]),
    });
  }

  ngOnInit(): void {
    this.book = this.config.data.book;
    this.freightQuotes = this.config.data.freightQuotes;
    this.selectRow(this.freightQuotes[0]);
  }

  validatorLeftPayment: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return Number(control.value) > this.totalPrice
      ? { LeftPayment: true }
      : null;
  };
  selectRow(item: any) {
    this.selectedItem = item;
    this.book.freightQuoteNo = item.FreightQuoteNo;
    this.totalPrice = +item.TotalPrice;
    this.leftPayment = 0;
    this.myForm.setValue({ formControlLeftPayment: '' });
  }

  getCityById(id: string) {
    return this.cityCS.getCityById(id);
  }

  async onSubmit() {
    this.loading = true;
    try {
      const result = await this.bookApiService.getBook(this.book);
      const issueBill = await this.bookApiService.IssueBill(
        result.BookingCode,
        String(this.leftPayment),
        +JSON.parse(localStorage.getItem('selectedPrinter')!).printerNo
      );

      this.router.navigate([
        this.Links.invoice.route + '/' + issueBill.bill?.billCode,
      ]);
      this.closeSubject.next('true');
    } catch (error) {
      let message = '';
      if (typeof error === 'string') {
        message = error.toString();
      } else if (error instanceof Error) {
        message = error.message;
      }
      this.niraSnackBar.show(message, {
        statusClass: 'error',
        duration: 3000,
      });
    }
    this.loading = false;
  }

  onChangeLeftPayment(event: string) {
    this.leftPayment = +event;
  }

  leftPaymentClicked() {
    this.myForm.setValue({
      formControlLeftPayment: this.totalPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    });
    this.leftPayment = this.totalPrice;
  }
  close() {
    this.closeSubject.next('true');
  }
}
