import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { RentDetail } from 'src/app/models/rentDetail';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-customer-rental',
  templateUrl: './customer-rental.component.html',
  styleUrls: ['./customer-rental.component.css'],
})
export class CustomerRentalComponent implements OnInit {
  rentals: RentDetail[];
  currentCustomerEmail = this.localStorageService.getCurrentCustomer().email;
  constructor(
    private rentalService: RentalService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {this.getRentalsByEmail(this.currentCustomerEmail);}

  getRentalsByEmail(currentCustomerEmail: string) {
    this.rentalService
      .getRentalsByEmail(currentCustomerEmail)
      .subscribe((response) => {        
        this.rentals = response.data;           
        
      });
  }

  getCurrentCustomer(): Customer {
    return this.localStorageService.getCurrentCustomer();
  }
}
