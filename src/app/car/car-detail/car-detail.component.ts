import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetails';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService],
})
export class CarDetailComponent implements OnInit {
  car!: Car;
  images: CarImage[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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
      this.setGallery();
    });
  }

  getImages() {
    const imageUrl = [];
    for (let i = 0; i < this.images.length; i++) {
      imageUrl.push({
        small:"https://localhost:44367/Images/"+ this.images[i].imagePath,
        medium:"https://localhost:44367/Images/" +this.images[i].imagePath,
        big:"https://localhost:44367/Images/"+ this.images[i].imagePath,
      });
    }
    return imageUrl;
  }
  setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '100%',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages()
  }
}
