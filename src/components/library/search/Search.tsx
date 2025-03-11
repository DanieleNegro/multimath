import React from "react";
import { useBookContext } from "../../../context/BookContext";
import { useBooksService } from "../../../hooks/useBooksService";
import { useTranslation } from "react-i18next";
import "../Library.css";

const Search: React.FC = () => {
  const { t } = useTranslation(["libraryPage"]);
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
    <form className="ms-2 me-0" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control rounded-0"
        id="searchInput"
        aria-describedby="searchInput"
        placeholder={t("labels.inputSearch")}
      />
      <button
        type="submit"
        className="btn btn-orange btn-primary rounded-0 ms-1"
      >
        {t("labels.search")}
      </button>
    </form>
  );
};

export default Search;
