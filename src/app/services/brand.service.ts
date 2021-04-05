import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44367/api/brands/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl + newPath);
  }

  add(brand: Brand) {
    let newPath = 'add';
    return this.httpClient.post(this.apiUrl + newPath, brand);
  }
}
