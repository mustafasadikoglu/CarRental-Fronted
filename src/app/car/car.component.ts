import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetails';
import { CarImage } from '../models/image';
import { CarImageService } from '../services/car-image.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  carImage:CarImage;
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCarDetail();
        this.getImageByCarId(params['']);
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
}
