import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import BookDM from '../store/dataModels/bookDM';
import PreBookDM from '../store/dataModels/preBookDM';
import { TOAST_MESSAGES } from '../utils/constants';
import { Toast } from '../utils/toast';
import { JsonParser } from '../utils/jsonparser';
import IssueBillDM from '../store/dataModels/issueBillDM';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private httpRequest: HttpRequestService) {}

  @Toast<BookDM>((result) => `${TOAST_MESSAGES.SUCCESSFUL_CREATE}`)
  async getBook(book: BookDM) {
    const params = {
      FreightQuoteNo: book.freightQuoteNo,
      PreBookCode: book.preBookCode,
      Receiver: {
        Address: book.receiver?.address,
        AddressTitle: book.receiver?.addressTitle,
        BuildingNo: book.receiver?.buildingNo,
        FullName: book.receiver?.fullName,
        GeoLocation: book.receiver?.geoLocation,
        Mobile: book.receiver?.mobile,
        PostalCode: book.receiver?.postalCode,
        ProfileAddressCode: book.receiver?.profileAddressCode,
        UnitNo: book.receiver?.unitNo,
        StationOfficeCode: book.receiver?.office?.id,
      },
      Sender: {
        Address: book.sender?.address,
        AddressTitle: book.sender?.addressTitle,
        BuildingNo: book.sender?.buildingNo,
        FullName: book.sender?.fullName,
        GeoLocation: book.sender?.geoLocation,
        Mobile: book.sender?.mobile,
        PostalCode: book.sender?.postalCode,
        ProfileAddressCode: book.sender?.profileAddressCode,
        UnitNo: book.sender?.unitNo,
        NationalCode: book.sender?.nationalCode,
        StationOfficeCode: book.sender?.office?.id,
      },
    };
    const data: any = await this.httpRequest.POST('/Freight/Book', params);
    return data.result;
  }

  public async IssueBill(
    bookingCode: string,
    leftPayment: string,
    printerId: number
  ) {
    const params = {
      BookingCode: bookingCode,
      PCPos: false,
      LeftPayment: leftPayment,
      PrinterId: printerId,
    };
    const data: any = await this.httpRequest.POST('/Freight/IssueBill', params);
    return JsonParser.deserializeObject(data.result, IssueBillDM);
  }
  async getQuote(preBook: PreBookDM) {
    const params = {
      OriginCityCode: preBook.originCity?.cityId,
      DestinationCityCode: preBook.destinationCity?.cityId,
      OriginOfficeCode: preBook.originOffice?.officeId,
      DestinationOfficeCode: preBook.destinationOffice?.officeId,
      PickupPointType: preBook.pickupPointType,
      DeliveryPointType: preBook.deliveryPointType,
      PackageInfo: preBook.packagesInfo.map((packageInfo) => {
        return {
          PackageTypeCode: packageInfo.packageType?.packageTypeID,
          PackageSize: {
            X: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.x
              : packageInfo.packageSizeType?.x,
            Y: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.y
              : packageInfo.packageSizeType?.y,
            Z: packageInfo.packageSizeType?.manualDimensions
              ? packageInfo.packageSize.z
              : packageInfo.packageSizeType?.z,
          },
          PackageTypeSizeCode: packageInfo.packageSizeType?.packageTypeSizeID,
          PackageWeight: packageInfo.packageWeight,
          ExceptionTypeCode: packageInfo.exceptionType?.exceptionTypeID,
          QTY: packageInfo.QTY,
        };
      }),
      MarketerCommissionAmount: preBook.marketerCommissionAmount,
      UnknownCourierAmount: preBook.unknownCourierAmount,
      PackingFeeAmount: preBook.packingFeeAmount,
      InsuranceAmount: preBook.insuranceAmount,
    };
    const data: any = await this.httpRequest.POST('/Freight/GetQuote', params);
    return data.result;
  }
}
