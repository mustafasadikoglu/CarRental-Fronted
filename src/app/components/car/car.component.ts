import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  carsDetailDto: CarDetail[];
  carImages: CarImage[];
  colors: Color[];
  brands: Brand[];
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandAndColor(params['brandId'], params['colorId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else {
        this.getCars();
        this.getCarDetailsDto();
      }
    });
  }

  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.carsDetailDto = response.data;        
        
      });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDetailsDto() {
    this.carService.getCarDetailsDto().subscribe((response) => {
      this.carsDetailDto = response.data;      
      
    });
  }
  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.carsDetailDto = response.data;
    });
  }
  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
      this.carsDetailDto = response.data;
    });
  }
 
  getImages() {
    this.carImageService.getImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
