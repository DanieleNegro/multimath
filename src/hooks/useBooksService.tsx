import { IBook } from "../models/Book";
import {
  BadRequest,
  getAllBooks,
  getAvailableBooks,
  getBooksByCategory,
  getBooksByTerm,
} from "../shared/LibraryService";
import { IBeBook } from "../models/BeBook";
import { useTranslation } from "react-i18next";
import { useBookContext } from "../context/BookContext";

export function useBooksService() {
  const { t } = useTranslation(["libraryPage"]);
  const { setIsLoading } = useBookContext();
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
          category: t(`categories.${beCatory}`),
        });
      });
    }
    return list;
  };

  const buildBookList = async (callback: (list: IBook[]) => void) => {
    setIsLoading(true);
    const list = await getAllBooks().then((data) => {
      return mapResponse(data);
    });
    setIsLoading(false);
    callback(list);
  };

  const firstAvailable = async (callback: (list: IBook[]) => void) => {
    setIsLoading(true);
    const list = await getAvailableBooks().then((data) => {
      return mapResponse(data);
    });
    setIsLoading(false);
    callback(list);
  };

  const bookListByCategory = async (
    callback: (list: IBook[]) => void,
    category: number,
  ) => {
    setIsLoading(true);
    const list = await getBooksByCategory(category).then((data) => {
      return mapResponse(data);
    });
    setIsLoading(false);
    callback(list);
  };

  const searchBooksByTerm = async (
    callback: (list: IBook[]) => void,
    term: string,
  ) => {
    setIsLoading(true);
    const list = await getBooksByTerm(term).then((data) => {
      return mapResponse(data);
    });
    setIsLoading(false);
    callback(list);
  };

  return {
    buildBookList,
    firstAvailable,
    bookListByCategory,
    searchBooksByTerm,
  };
}
