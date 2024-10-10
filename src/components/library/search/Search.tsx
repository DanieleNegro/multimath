import React, { useRef } from "react";

const Search: React.FC = () => {
  const termRef = useRef(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form className="d-flex ms-2 me-0" onSubmit={handleSubmit}>
      <input
        ref={termRef}
        type="text"
        className="form-control rounded-0"
        id="searchInput"
        aria-describedby="searchInput"
        placeholder="Search books"
      />
      <button type="submit" className="btn btn-orange btn-primary rounded-0">
        Search
      </button>
    </form>
  );
};

export default Search;
