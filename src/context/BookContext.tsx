import { createContext, useContext, useState } from "react";
import { Props } from "./Props";
import { IBook } from "../models/Book";

export interface IBookContext {
  books: IBook[];
  setBooks: (value: IBook[]) => void;
}

const DEFAULT_STATE = {
  books: [],
  setBooks: () => {
    console.debug("");
  },
};

export const BookContext = createContext<IBookContext>(DEFAULT_STATE);

export function BookProvider({ children }: Props) {
  const [books, setBooks] = useState<IBook[]>([]);

  const provider = {
    books,
    setBooks,
  };

  return (
    <BookContext.Provider value={provider}>{children}</BookContext.Provider>
  );
}

export const useBookContext = () => {
  return useContext(BookContext);
};
