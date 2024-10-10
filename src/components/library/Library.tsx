import React, { useEffect, useState } from "react";
import { useBooksService } from "../../hooks/useBooksService";
import { IBook } from "../../models/Book";
import "../../App.css";
import "./Library.css";
import Search from "./search/Search";
import Filters from "./filters/Filters";
import available from "../../assets/available.png";
import notAvailable from "../../assets/notAvailable.png";
import { Category } from "../../shared/Category";

const Library: React.FC = () => {
  const { buildBookList, firstAvailable, bookListByCategory } =
    useBooksService();
  const [books, setBooks] = useState<IBook[]>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (isAvailable && category === "all") {
      firstAvailable(setBooks);
    } else {
      buildBookList(setBooks);
    }
  }, [isAvailable]);

  useEffect(() => {
    if (category !== "all") {
      const stringKeys = Object.keys(Category).filter((v) => isNaN(Number(v)));
      const key = stringKeys.findIndex((item) => item === category);
      bookListByCategory(setBooks, key);
    } else {
      buildBookList(setBooks);
    }
  }, [category]);

  const showAvailable = () => {
    setIsAvailable(!isAvailable);
  };

  const onChageCategory = (selected: string) => {
    setCategory(selected);
  };

  return (
    <div className="container-fluid h-100 mt-5">
      <div className="d-flex justify-content-center">
        <h2>Library</h2>
        <Search />
        <Filters
          showAvailable={showAvailable}
          onChageCategory={onChageCategory}
        />
      </div>
      <div className="container-fluid mx-0 mt-3 px-5 d-flex justify-content-center flex-column">
        <div key="book" className="row d-flex text-center">
          <div className="col-4 bg-orange header border-end border-bottom">
            <h4>Title</h4>
          </div>
          <div className="col-4 bg-orange header border-end border-bottom">
            <h4>Author</h4>
          </div>
          <div className="col-2 bg-orange header border-bottom">
            <h4>Category</h4>
          </div>
          <div className="col-2 bg-orange header border-bottom">
            <h4>Available</h4>
          </div>
        </div>
        {books.map((book, index) => {
          return (
            <div key={`book${index}`} className="row d-flex highlight">
              <div className="col-4 border-bottom py-2">{book.title}</div>
              <div className="col-4 border-bottom py-2">{book.author}</div>
              <div className="col-2 border-bottom py-2 text-center">
                {book.category}
              </div>
              <div className="col-2 border-bottom py-2 text-center">
                {book.available ? (
                  <img height="20" width="20" src={available} alt="available" />
                ) : (
                  <img
                    height="20"
                    width="20"
                    src={notAvailable}
                    alt="not available"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
