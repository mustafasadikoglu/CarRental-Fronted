import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetails';
import { CarImage } from '../models/carImage';
import { GetResponseModel } from '../models/getResponseModel';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44367/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrand(id: number): Observable<ListResponseModel<CarDetail>> {
    let newpath = this.apiUrl + 'cars/getcarsbybrand?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }
  getCarsByColor(id: number): Observable<ListResponseModel<CarDetail>> {
    let newpath = this.apiUrl + 'cars/getcarsbycolor?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }
  getCarsById(carId: number): Observable<GetResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbyid?id=' + carId;
    return this.httpClient.get<GetResponseModel<Car>>(newPath);
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
