import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { Toast } from '../utils/toast';
import SettlementVehicleDebtToOfficeDM from '../store/dataModels/settlementVehicleDebtToOfficeDM';
import { TOAST_MESSAGES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SettlementApiService {
  constructor(private httpRequest: HttpRequestService) {}

  @Toast<SettlementVehicleDebtToOfficeDM>(
    (result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  public async SettlementVehicleDebtToOffice(
    settlementVehicleDebtToOffice: SettlementVehicleDebtToOfficeDM
  ) {
    const params = {
      VehicleCode: settlementVehicleDebtToOffice.vehicleCode,
      Amount: settlementVehicleDebtToOffice.amount,
      CurrencyCode: 'IRR',
      PaymentDate: settlementVehicleDebtToOffice.paymentDate,
      ReceiptNo: settlementVehicleDebtToOffice.receiptNo,
      Description: settlementVehicleDebtToOffice.description,
    };
    const data: any = await this.httpRequest.POST(
      '/Accounting/SettlementVehicleDebtToOffice',
      params
    );
    return data;
  }

  @Toast<SettlementVehicleDebtToOfficeDM>(
    (result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  public async SettlementOfficeDebtToVehicle(
    settlementVehicleDebtToOffice: SettlementVehicleDebtToOfficeDM
  ) {
    const params = {
      VehicleCode: settlementVehicleDebtToOffice.vehicleCode,
      Amount: settlementVehicleDebtToOffice.amount,
      CurrencyCode: 'IRR',
      PaymentDate: settlementVehicleDebtToOffice.paymentDate,
      ReceiptNo: settlementVehicleDebtToOffice.receiptNo,
      Description: settlementVehicleDebtToOffice.description,
    };
    const data: any = await this.httpRequest.POST(
      '/Accounting/SettlementOfficeDebtToVehicle',
      params
    );
    return data;
  }
}
