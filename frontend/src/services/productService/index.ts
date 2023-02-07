import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";
import { IDish, IProduct } from "../../types/products.type";

import { ICategoryResponse, IDishResponse, IOneDishResponse } from "../../types/response.types";

export class ProductsService {
  constructor(private httpService: HttpService) {}
  public getAllProducts(): Promise<IProduct[] | void> {
    return this.httpService.get("/api/products/");
  }

  public getAllDishes(limit: number): Promise<IDishResponse | void> {
    return this.httpService.get(`/api/dishes/?limit=${limit}`);
  }


  public getDishById(id: string | undefined): Promise<IOneDishResponse | void> {
    return this.httpService.get(`/api/dishes/${id}/`);
  }

  public getAllCategories(): Promise<ICategoryResponse | void> {
    return this.httpService.get(`/api/dishes/category/`);
  }

  public getDishesByCategories(query: string): Promise<IDish[] | void> {
    return this.httpService.get(`/api/dishes/${query}`);
  }

  public getUserProducts(id: number, config: string): Promise<IDish[] | void> {
    return this.httpService.get(`/api/products/user/${id}/`, {
      headers: { Authorization: config },
    });
  }
}

const factory = new HttpServiceFactory();
export const productsService = new ProductsService(factory.createHttpService());
