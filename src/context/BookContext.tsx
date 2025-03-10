import { createContext, useContext, useState } from "react";
import { Props } from "./Props";
import { IBook } from "../models/Book";

export interface IBookContext {
  books: IBook[];
  setBooks: (value: IBook[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const DEFAULT_STATE = {
  books: [],
  setBooks: () => {
    console.debug("");
  },
  isLoading: false,
  setIsLoading: () => {
    console.debug("");
  },
};

export const BookContext = createContext<IBookContext>(DEFAULT_STATE);

export function BookProvider({ children }: Props) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const provider = {
    books,
    setBooks,
    isLoading,
    setIsLoading,
  };

  return (
    <BookContext.Provider value={provider}>{children}</BookContext.Provider>
  );
}

export const useBookContext = () => {
  return useContext(BookContext);
};
