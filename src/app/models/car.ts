import { Brand } from './brand';
import { Color } from './color';
import { CarImage } from './image';

export interface Car {
  id: number;
  brandId: number;
  colorId: number;
  carName: string;
  carImages: CarImage[];
  imagePath:string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  brand: Brand;
  color: Color;
}

// id:number;
// brandId:number;
// colorId:number;
// carName:string;
// modelYear:number;
// dailyPrice:number;
// description:number
