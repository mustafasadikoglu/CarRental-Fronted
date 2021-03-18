import { CarImage } from './image';
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
  image: CarImage[];
}

// public int CarId { get; set; }
//         public int BrandId { get; set; }
//         public int ColorId { get; set; }
//         public string CarName { get; set; }
//         public string BrandName { get; set; }
//         public string ColorName { get; set; }
//         public decimal DailyPrice { get; set; }
//         public string ModelYear { get; set; }
//         public string ImagePath { get; set; }
