export interface ISignUpData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  check_password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
