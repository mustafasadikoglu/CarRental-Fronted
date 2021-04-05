import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterUser } from '../models/userRegister';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44367/api/auth/';
  userToken: any;
  token: string = 'token';
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  register(
    userRegister: RegisterUser
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      userRegister
    );
  }
  update(customer: Customer): Observable<SingleResponseModel<TokenModel>> {
    let updatePath = this.apiUrl + 'update';
    return this.httpClient.put<SingleResponseModel<TokenModel>>(updatePath, customer);
 }

  logOut() {
    this.localStorageService.removeToken();
    this.toastrService.success('Çıkış Yapıldı.');
  }

  isAuthenticated() {
    return localStorage.getItem(this.token);
  }
}
