import { CarImage } from "./carImage";

export interface CarDetail {
  carId: number;
  colorId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  brandId: number;
  modelYear: number;
  description: string;
  imagePath: string;
  carImage: CarImage[];
}

