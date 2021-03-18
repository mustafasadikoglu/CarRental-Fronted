import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/image';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService],
})
export class CarDetailComponent implements OnInit {
  car!: Car;
  images: CarImage[];
 
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private imageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
      this.getImageByCarId(params['carId']);
    });
  }

  getCarById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.car = response.data;
    });
  }

  getImageByCarId(id: number) {
    this.imageService.getImagesByCarId(id).subscribe((response) => {
      this.images = response.data;
    });
  }
}
