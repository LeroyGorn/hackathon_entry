import { IDish, IProduct } from "./products.type";

export interface ILoginResponse {
  access: string;
  refresh: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface ISignUpResponse {
  email: string;
  first_name: string;
  last_name: string;
}

export interface IRefreshResponse {
  refresh: string;
}

export interface IDishResponse {
  count: number;
  next: string;
  results: IDish[];
}

export interface IOneDishResponse {
  dish: IDish;
  products: [
    {
      product: IProduct;
      quantity: number
    }
  ];
}