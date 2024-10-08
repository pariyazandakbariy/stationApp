import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import PrinterDM from '../store/dataModels/printerDM';
import { Toast } from '../utils/toast';
import { TOAST_MESSAGES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class PrinterApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async OfficePrinterList() {
    const data: any = await this.httpRequest.GET(
      '/Entities/OfficePrinter/OfficePrinterList'
    );
    return JsonParser.deserializeArray(data, PrinterDM);
  }

  @Toast<PrinterDM>(
    (result) => ` ${result.name} ${TOAST_MESSAGES.SUCCESSFUL_CREATE}`
  )
  async add(printer: PrinterDM) {
    const officeCode = localStorage.getItem('officeCode');

    const params = {
      OfficeCode: officeCode,
      PrinterType: printer.type,
      PrinterName: printer.name,
      Channel: printer.channel,
      Brand: printer.brand,
      Model: printer.model,
      PrinterNo: printer.printerNo,
      DriverAddress: printer.driverAddress,
    };
    const data: any = await this.httpRequest.POST(
      '/Entities/OfficePrinter/OfficePrinterAdd',
      params
    );
    return JsonParser.deserializeObject(data.result, PrinterDM);
  }

  @Toast<PrinterDM>(
    (result) => ` ${result.name} ${TOAST_MESSAGES.SUCCESSFUL_EDIT}`
  )
  async edit(printer: PrinterDM) {
    const officeCode = localStorage.getItem('officeCode');

    const params = {
      OfficePrinterID: printer.officePrinterID,
      OfficeCode: officeCode,
      PrinterType: printer.type,
      PrinterName: printer.name,
      Channel: printer.channel,
      Brand: printer.brand,
      Model: printer.model,
      PrinterNo: printer.printerNo,
      DriverAddress: printer.driverAddress,
    };
    const data: any = await this.httpRequest.PUT(
      '/Entities/OfficePrinter/OfficePrinterEdit',
      params
    );
    return JsonParser.deserializeObject(data.result, PrinterDM);
  }

  @Toast<PrinterDM>((result) => ` ${TOAST_MESSAGES.SUCCESSFUL_DELETED}`)
  async delete(printer: PrinterDM) {
    const data: any = await this.httpRequest.DELETE(
      '/Entities/OfficePrinter/OfficePrinterRemove/' + printer.officePrinterID
    );
    return 'Success';
  }
}
