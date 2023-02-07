import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";
import { IDish, IProduct, IUserProducts } from "../../types/products.type";
import { ICategoryResponse, IDishResponse } from "../../types/response.types";

export class ProductsService {
  constructor(private httpService: HttpService) {}
  public getAllProducts(): Promise<IProduct[] | void> {
    return this.httpService.get("/api/products/");
  }

  public getAllDishes(limit: number): Promise<IDishResponse | void> {
    return this.httpService.get(`/api/dishes/?limit=${limit}`);
  }

  public getFilteredDishes(
    name?: string,
    ingredients?: string,
    limit?: number
  ): Promise<IDishResponse | void> {
    return this.httpService.get(
      `/api/dishes/?name=${name}&product=${ingredients}&limit=${limit}`
    );
  }

  public getAllCategories(): Promise<ICategoryResponse | void> {
    return this.httpService.get(`/api/dishes/category/`);
  }

  public getDishesByCategories(query: string): Promise<IDish[] | void> {
    return this.httpService.get(`/api/dishes/${query}`);
  }

  public getUserProducts(config: string): Promise<IUserProducts[] | void> {
    return this.httpService.get(`api/products/user_products/`, {
      headers: { Authorization: config },
    });
  }

  public getUserDishes(config: string): Promise<IDish[] | void> {
    return this.httpService.get(`api/dishes/available/`, {
      headers: { Authorization: config },
    });
  }
}

const factory = new HttpServiceFactory();
export const productsService = new ProductsService(factory.createHttpService());
