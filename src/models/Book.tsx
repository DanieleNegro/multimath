import { Category } from "../shared/Category";

export interface IBook {
  title: string;
  author: string;
  available: boolean;
  category: Category;
}
