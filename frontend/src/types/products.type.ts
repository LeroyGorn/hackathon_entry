export interface IProduct {
  id?: number;
  name: string;
  description: string;
  measurement: string;
}
export interface IDish {
  id?: number;
  name: string;
  image: string;
  instructions: string;
  category: string;
}

export interface ICategoryState {
  category: string[];
}
