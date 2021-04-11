import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44367/api/rentals/';
  rentingCar: Rental;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<RentDetail>> {
    let newPath = 'getall';
    return this.httpClient.get<ListResponseModel<RentDetail>>(
      this.apiUrl + newPath
    );
  }
  getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'getrentalbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalsByEmail(email: string): Observable<ListResponseModel<RentDetail>> {
    let newPath = this.apiUrl + 'getrentalsbyemail?email=' + email;
    return this.httpClient.get<ListResponseModel<RentDetail>>(newPath);
  }

  setRentingCar(rental: Rental) {
    this.rentingCar = rental;
  }

  getRentingCar() {
    return this.rentingCar;
  }

  removeRentingCar() {
    this.rentingCar = null;
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add", rental);
  }
}
