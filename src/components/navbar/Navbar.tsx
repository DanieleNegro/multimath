import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navabar: React.FC = () => {
  const { t, i18n } = useTranslation(["common"]);
  const [toggle, setToggle] = useState(false);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setToggle(!toggle);
  };
  return (
    <nav className="bg-orange navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/rts">
            <span className="navbar-brand">{t("navbar.title")}</span>
          </Link>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/rts/multimath">
              {t("navbar.labels.multiMath")}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/rts/library">
              {t("navbar.labels.library")}
            </Link>
          </li>
          <li className="nav-item dropdown position-relative border border-white">
            <button
              className="nav-link dropdown-toggle"
              role="button"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {t("navbar.labels.lang")}
            </button>
            {toggle && (
              <ul className="list-group list-group-flush position-absolute w-100 border border-secondary">
                <li className="list-group-item highlight">
                  <button
                    className=" dropdown-item btn btn-link"
                    onClick={() => changeLanguage("en")}
                  >
                    en
                  </button>
                </li>
                <li className="list-group-item highlight">
                  <button
                    className=" dropdown-item btn btn-link"
                    onClick={() => changeLanguage("it")}
                  >
                    it
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
