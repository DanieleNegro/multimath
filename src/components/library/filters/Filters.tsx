import React, { useState } from "react";
import { stringKeys } from "../../../shared/Category";
import "../Library.css";
import { cn } from "../../../shared/cn";
import { useBookContext } from "../../../context/BookContext";
import { useBooksService } from "../../../hooks/useBooksService";

const Filters: React.FC = () => {
  const { setBooks } = useBookContext();
  const { buildBookList, bookListByCategory, firstAvailable } =
    useBooksService();
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="d-flex">
      <button
        type="button"
        className={cn(
          { rule: "btn btn-orange btn-primary rounded-0" },
          { rule: { key: "btn-orange-active", constraint: active } },
        )}
        onClick={() => {
          firstAvailable(setBooks);
          setActive(!active);
        }}
      >
        Available
      </button>
      <div className="position-relative">
        <button
          className="h-100 btn btn-orange btn-primary rounded-0 dropdown-toggle"
          type="button"
          onClick={() => {
            setDropdownToggle(!dropdownToggle);
          }}
        >
          Filter by Category
        </button>
        {dropdownToggle && (
          <ul className="list-group list-group-flush border position-absolute w-100">
            <li key="all" className="list-group-item highlight">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  buildBookList(setBooks);
                  setDropdownToggle(!dropdownToggle);
                }}
              >
                All
              </button>
            </li>
            {stringKeys.map((category) => {
              return (
                <li key={category} className="list-group-item highlight">
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      const key = stringKeys.findIndex(
                        (item) => item === category,
                      );
                      bookListByCategory(setBooks, key);
                      setDropdownToggle(!dropdownToggle);
                    }}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;
