import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  customer: Customer;
  currentCustomerEmail: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private customerService: CustomerService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.localStorageService.removeToken();
    this.localStorageService.removeCurrentCustomer();
    this.toastrService.info('Çıkış yapıldı');
    this.router.navigate(['/cars']);
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getCurrentCustomer():Customer {
   return this.localStorageService.getCurrentCustomer();
  }
}
