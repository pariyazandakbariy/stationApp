import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class VoidBillApiService {
  constructor(private httpRequest: HttpRequestService) {}

  @Toast<string>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  public async VoidBill(voidBill: {
    billCode: string;
    commentVoidBill: string;
  }) {
    const params = {
      Comment: voidBill.commentVoidBill,
      BillCode: voidBill.billCode,
    };
    const data: any = await this.httpRequest.POST('/Freight/VoidBill', params);
    return true;
  }
}
