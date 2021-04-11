import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  customer: Customer;
  currentCustomerEmail: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {     
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.info(response.message);
          this.localStorageService.setToken(response.data);
          this.getCustomerByEmail(loginModel.email);
          this.router.navigate(['/cars']);
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    }
  }

  getCustomerByEmail(email: string) {
    this.customerService.getCustomerByEmail(email).subscribe((response) => {
      this.customer = response.data;
      this.localStorageService.setCurrentCustomer(this.customer);
    });
  }
  setCurrentCustomerEmail() {
    return this.localStorageService.getCurrentCustomer()
      ? (this.currentCustomerEmail = this.localStorageService.getCurrentCustomer().email)
      : null;
  }
}
