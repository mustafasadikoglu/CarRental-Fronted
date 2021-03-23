import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetails';
import { Color } from '../models/color';
import {  CarImage } from '../models/carImage';
import { BrandService } from '../services/brand.service';
import { CarImageService } from '../services/car-image.service';
import { CarService } from '../services/car.service';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] ;
  carDetails: CarDetail[] = [];
  carImage:CarImage;
  colors: Color[] ;
  brands:Brand[];
  filterText='';
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService,
    private colorService: ColorService,
    private brandService:BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        this.getColors();
        this.getBrands();
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
        this.getColors();
        this.getBrands();
      } else {
        this.getCars();
        this.getImageByCarId(params['']);
        this.getColors();
        this.getBrands();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDetail() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  // getImagesByCarId(id:number){
  //   this.carService.getImagesByCarId(id).subscribe(response=>{
  //     this.carImages=response.data
  //   })
  // }
  getImageByCarId(id:number){
    this.carImageService.getImageByCarId(id).subscribe(response=>{
      this.carImage=response.data
    })
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
}
