import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  car: Car;
  brands: Brand[];
  colors: Color[];
  carUpdateForm: FormGroup;
  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getCarById(param['carId']);
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: [this.car.id, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colorId, Validators.required],
      carName: [this.car.carName, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description],
      findexPoint: [this.car.findexPoint],
    });
  }

  update() {
    let car: Car = Object.assign({}, this.carUpdateForm.value);
       
    if (this.carUpdateForm.valid) {
      this.carService.update(car).subscribe((response) => {
        this.toastrService.success('Güncelleme başarılı');
      });
    }
  }

  getCarById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.car = response.data;
      this.getBrands();
      this.getColors();
      this.createCarUpdateForm();
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
