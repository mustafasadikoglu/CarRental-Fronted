import { ResponseModel } from "./responseModel";

export interface GetResponseModel<T> extends ResponseModel{
    data:T;
}