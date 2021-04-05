export interface Rental{
    Id:number;
    carId:number;
    CustomerId:number;
    rentDate:Date;
    returnDate?:Date;
}