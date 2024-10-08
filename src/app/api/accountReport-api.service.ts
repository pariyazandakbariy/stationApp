import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import AccountReportDM from '../store/dataModels/accountReportDM';
import GroupBalanceDM from '../store/dataModels/groupBalanceDM';

@Injectable({
  providedIn: 'root',
})
export class AccountReportApiService {
  constructor(private httpRequest: HttpRequestService) {}

  async AccountReport(
    reportType: string,
    fromDate: string | undefined,
    toDate: string | undefined,
    accountCode: string,
    center1: string | null | undefined,
    center2: string | null | undefined
  ) {
    const params = {
      ReportType: reportType,
      FromDate: fromDate,
      ToDate: toDate,
      AccountCode: accountCode,
      Center1: center1,
      Center2: center2,
    };
    const data: any = await this.httpRequest.POST(
      '/Finance/AccountReport',
      params
    );
    return JsonParser.deserializeArray(
      data.result.AccountReportDetailed,
      AccountReportDM
    );
  }

  async AccountReportSummary(
    reportType: string,
    fromDate: string | undefined,
    toDate: string | undefined,
    accountCode: string,
    center1: string | null | undefined,
    center2: string | null | undefined
  ) {
    const params = {
      ReportType: reportType,
      AccountCode: accountCode,
      FromDate: fromDate,
      ToDate: toDate,
      Center1: center1,
      Center2: center2,
    };
    const data: any = await this.httpRequest.POST(
      '/Finance/AccountReport',
      params
    );
    return {
      fromDate: data.result.FromDate,
      toDate: data.result.ToDate,
      summery: data.result.Summary,
    };
  }

  async AccountReportBalance(
    reportType: string,
    accountCode: string,
    center1: string | null | undefined,
    center2: string | null | undefined
  ) {
    const params = {
      ReportType: reportType,
      AccountCode: accountCode,
      Center1: center1,
      Center2: center2,
    };
    const data: any = await this.httpRequest.POST(
      '/Finance/AccountReport',
      params
    );
    return {
      balance: data.result.Balance,
      reportDateTime: data.result.ReportDateTime,
    };
  }
  async AccountReportGroupedBalance(
    reportType: string,
    accountCode: string,
    center1: string | null | undefined
  ) {
    const params = {
      ReportType: reportType,
      AccountCode: accountCode,
      Center1: center1,
      Center2: null,
    };
    const data: any = await this.httpRequest.POST(
      '/Finance/AccountReport',
      params
    );
    return JsonParser.deserializeArray(
      data.result.GroupBalance,
      GroupBalanceDM
    );
  }
}
