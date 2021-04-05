import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44367/api/customers/';
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiUrl + newPath
    );
  }

  getCustomerByEmail(email: string): Observable<SingleResponseModel<Customer>> {
    let newPath = 'getcustomerbyemail?email=' + email;
    return this.httpClient.get<SingleResponseModel<Customer>>(
      this.apiUrl + newPath
    );
  }

  GetCustomerDetails(): Observable<ListResponseModel<Customer>> {
    let newPath = 'getcustomerdetails' ;
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiUrl + newPath
    );
  }

  update(customer: Customer){
    return this.httpClient.put<Customer>(this.apiUrl, customer);
 }
}
