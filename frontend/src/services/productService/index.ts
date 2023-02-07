import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";
import { IDish, IProduct } from "../../types/products.type";
import { IDishResponse, IOneDishResponse } from "../../types/response.types";

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
}

const factory = new HttpServiceFactory();
export const productsService = new ProductsService(factory.createHttpService());
