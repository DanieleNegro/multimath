import { Category } from "../shared/Category";
import { IBook } from "../models/Book";
import {
  BadRequest,
  getAllBooks,
  getAvailableBooks,
  getBooksByCategory,
  getBooksByTerm,
} from "../shared/LibraryService";
import { IBeBook } from "../models/BeBook";

export function useBooksService() {
  const mapResponse = (
    data: IBeBook | IBeBook[] | BadRequest | Error,
  ): IBook[] => {
    const list: IBook[] = [];
    if (Array.isArray(data)) {
      data.forEach((element) => {
        const beCatory = element.category;
        list.push({
          title: element.title,
          author: element.author,
          available: element.available.toLowerCase() === "y",
          category: Category[beCatory],
        });
      });
    }
    return list;
  };

  const buildBookList = async (callback: (list: IBook[]) => void) => {
    const list = await getAllBooks().then((data) => {
      return mapResponse(data);
    });
    callback(list);
  };

  const firstAvailable = async (callback: (list: IBook[]) => void) => {
    const list = await getAvailableBooks().then((data) => {
      return mapResponse(data);
    });
    callback(list);
  };

  const bookListByCategory = async (
    callback: (list: IBook[]) => void,
    category: number,
  ) => {
    const list = await getBooksByCategory(category).then((data) => {
      return mapResponse(data);
    });
    callback(list);
  };

  const searchBooksByTerm = async (
    callback: (list: IBook[]) => void,
    term: string,
  ) => {
    const list = await getBooksByTerm(term).then((data) => {
      return mapResponse(data);
    });
    callback(list);
  };

  return {
    buildBookList,
    firstAvailable,
    bookListByCategory,
    searchBooksByTerm,
  };
}
