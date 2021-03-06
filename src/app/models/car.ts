import { Brand } from './brand';
import { Color } from './color';
import { CarImage } from './carImage';

export interface Car {
  id: number;
  brandId: number;
  colorId: number;
  carName: string; 
  modelYear: number;
  dailyPrice: number;
  description: string;
  findexPoint:number;
  carImages: CarImage[];   
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
