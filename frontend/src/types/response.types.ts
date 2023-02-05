export interface ILoginResponse {
  access: string;
  refresh: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IRefreshResponse {
  refresh: string;
}
