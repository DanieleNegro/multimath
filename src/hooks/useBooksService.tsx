import { Category } from "../shared/Category";
import { IBook } from "../models/Book";
import {
  getAllBooks,
  getAvailableBooks,
  getBooksByCategory,
} from "../shared/LibraryService";

export function useBooksService() {
  const buildBookList = async (callback: (list: IBook[]) => void) => {
    const list = await getAllBooks().then((data) => {
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
    });
    callback(list);
  };

  const firstAvailable = async (callback: (list: IBook[]) => void) => {
    const list = await getAvailableBooks().then((data) => {
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
    });
    callback(list);
  };

  const bookListByCategory = async (
    callback: (list: IBook[]) => void,
    category: number,
  ) => {
    const list = await getBooksByCategory(category).then((data) => {
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
    });
    callback(list);
  };

  return { buildBookList, firstAvailable, bookListByCategory };
}
