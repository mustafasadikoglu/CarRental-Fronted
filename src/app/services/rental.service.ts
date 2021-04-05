import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiurl = 'https://localhost:44367/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<RentDetail>> {
    let newPath = 'getall';
   return this.httpClient.get<ListResponseModel<RentDetail>>(this.apiurl + newPath);
  }
}
