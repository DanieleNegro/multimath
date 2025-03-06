import React from "react";
import { useBookContext } from "../../../context/BookContext";
import { useBooksService } from "../../../hooks/useBooksService";

const Search: React.FC = () => {
  const { setBooks } = useBookContext();
  const { searchBooksByTerm } = useBooksService();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      searchInput: { value: string };
    };
    searchBooksByTerm(setBooks, formElements.searchInput.value);
  };

  return (
    <form className="d-flex ms-2 me-0" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control rounded-0"
        id="searchInput"
        aria-describedby="searchInput"
        placeholder="Search books"
      />
      <button
        type="submit"
        className="btn btn-orange btn-primary rounded-0 ms-1"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
