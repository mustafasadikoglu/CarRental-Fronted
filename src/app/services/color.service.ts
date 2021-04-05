import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl='https://localhost:44367/api/colors/';
  constructor(private httpClient:HttpClient) { }


  getColors():Observable<ListResponseModel<Color>>{
    let newPath="getall"
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+newPath);
  }

  add(color: Color) {
    let newPath = 'add';
    return this.httpClient.post(this.apiUrl + newPath, color);
  }

  
}
