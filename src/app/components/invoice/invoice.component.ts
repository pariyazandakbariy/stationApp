import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { String } from 'lodash';
import { BillInformationApiService } from 'src/app/api/billInformation-api.service';
import BillInformationDM from 'src/app/store/dataModels/billInformationDM';

export interface ErrorType {
  description_en: string;
  description_fa: string;
  errorCode: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  printerOffice: string = '';
  error: ErrorType | undefined = undefined;
  loading = false;
  constructor(
    private billInformationApiService: BillInformationApiService,
    private route: ActivatedRoute
  ) {}
  issueBill: BillInformationDM | undefined;
  billCode: string = '';
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('billCode');
    if (routeParam) {
      this.billCode = routeParam;
      this.getBillInformationApiService(this.billCode);
      this.printerOffice += localStorage.getItem('userID');
    }
  }

  async getBillInformationApiService(billCode: string) {
    this.loading = true;
    try {
      this.issueBill = await this.billInformationApiService.BillInformation(
        billCode
      );
    } catch (error: any) {
      this.error = error.error;
    }
    this.loading = false;
  }
}
