import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";
import { IProduct } from "../../types/products.type";
import { IDishResponse } from "../../types/response.types";

export class ProductsService {
  constructor(private httpService: HttpService) {}
  public getAllProducts(): Promise<IProduct[] | void> {
    return this.httpService.get("/api/products/");
  }

  public getAllDishes(limit: number): Promise<IDishResponse | void> {
    return this.httpService.get(`/api/dishes/?limit=${limit}`);
  }
}

const factory = new HttpServiceFactory();
export const productsService = new ProductsService(factory.createHttpService());
