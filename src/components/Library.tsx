import React, { useEffect, useState } from "react";
import { useBooksService } from "../hooks/useBooksService";
import { IBook } from "../models/Book";

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
      <div className="d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          {books.map((book, index) => {
            return (
              <li key={`book${index}`} className="list-group-item">
                <div className="d-flex align-items-center">
                  <h4>{book.title}</h4>
                  <h4>{book.author}</h4>
                  <h4>{book.category}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Library;
