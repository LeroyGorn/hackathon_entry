import { ILoginData, IRefreshData, ISignUpData } from "../../types/auth.types";
import { ILoginResponse, IRefreshResponse } from "../../types/response.types";
import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../";

export class AdminAuthService {
  constructor(private httpService: HttpService) {}
  public registerUser(data: ISignUpData) {
    return this.httpService.post("/api/auth/register/", data);
  }

  public loginUser(data: ILoginData): Promise<ILoginResponse | void> {
    return this.httpService.post("/api/auth/login/", data);
  }

  public refresh(data: IRefreshData): Promise<IRefreshResponse | void> {
    return this.httpService.post("/api/auth/refresh/", data);
  }
}

const factory = new HttpServiceFactory();
export const authService = new AdminAuthService(factory.createHttpService());
