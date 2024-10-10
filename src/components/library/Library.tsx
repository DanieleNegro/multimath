import React, { useEffect, useState } from "react";
import { useBooksService } from "../../hooks/useBooksService";
import { IBook } from "../../models/Book";
import "../../App.css";
import "./Library.css";

const Library: React.FC = () => {
  const { buildBookList } = useBooksService();
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    buildBookList(setBooks);
  }, []);

  return (
    <div className="container-fluid h-100 mt-5">
      <div className="d-flex flex-column text-center">
        <h2>Library</h2>
      </div>
      <div className="container-fluid mx-0 mt-3 px-5 d-flex justify-content-center flex-column">
        <div key="book" className="row d-flex text-center">
          <div className="col-4 bg-orange header border-end border-bottom">
            <h4>Title</h4>
          </div>
          <div className="col-4 bg-orange header border-end border-bottom">
            <h4>Author</h4>
          </div>
          <div className="col-4 bg-orange header border-bottom">
            <h4>Category</h4>
          </div>
        </div>
        {books.map((book, index) => {
          return (
            <div key={`book${index}`} className="row d-flex highlight">
              <div className="col-4 border-bottom py-2">{book.title}</div>
              <div className="col-4 border-bottom py-2">{book.author}</div>
              <div className="col-4 border-bottom py-2 text-center">
                {book.category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
