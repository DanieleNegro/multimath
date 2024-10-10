import React, { useState } from "react";
import { Category } from "../../../shared/Category";
import "../Library.css";
import { cn } from "../../../shared/cn";

interface IFilters {
  showAvailable: () => void;
  onChageCategory: (valute: string) => void;
}

const Filters: React.FC<IFilters> = ({ showAvailable, onChageCategory }) => {
  const stringKeys = Object.keys(Category).filter((v) => isNaN(Number(v)));
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
          showAvailable();
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
                  onChageCategory("all");
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
                      onChageCategory(category);
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
