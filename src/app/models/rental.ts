export interface Rental{
    id:number;
    carId:number;
    CustomerId:number;
    rentDate:Date;
    returnDate?:Date;
}