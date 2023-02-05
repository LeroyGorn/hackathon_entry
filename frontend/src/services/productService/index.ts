import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";
import { IProduct } from "../../types/products.type";
import axios from "axios";
import { get } from "../../redux/slices/product-slice";

export class ProductsService {
  constructor(private httpService: HttpService) {}
  public getAllProducts(): Promise<IProduct[] | void> {
    return this.httpService.get("/api/products/");
  }
}

const factory = new HttpServiceFactory();
export const productsService = new ProductsService(factory.createHttpService());
