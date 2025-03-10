import React from "react";
import "../../App.css";
import "./Library.css";
import Header from "./Header";
import Content from "./Content";
import { BookProvider } from "../../context/BookContext";

const Library: React.FC = () => {
  return (
    <BookProvider>
      <div className="container-fluid h-100 mt-5">
        <Header />
        <Content />
      </div>
    </BookProvider>
  );
};

export default Library;
