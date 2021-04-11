import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'https://localhost:44367/api/cards/';

   constructor(private httpClient: HttpClient) {
   }

   add(card: Card): Observable<ResponseModel> {
      let newPath="add";
      return this.httpClient.post<ResponseModel>(this.apiUrl+newPath, card);
   }

   getCardsByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
      let getByCustomerPath = this.apiUrl + 'getbycustomerid?customerId=' + customerId;
      return this.httpClient.get<ListResponseModel<Card>>(getByCustomerPath);
   }
}
