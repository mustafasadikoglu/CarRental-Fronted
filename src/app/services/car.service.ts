import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetails';
import { CarImage } from '../models/carImage';


import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  getCarDetailsDto(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsdto';
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


  getCarsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandandcolor?brandId="+brandId+"&colorId="+colorId;
        
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);


  }
  getCarsById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbyid?id=' + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImageByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagebycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }


  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add",car)
  }

  update(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/update",car)
  }
}
