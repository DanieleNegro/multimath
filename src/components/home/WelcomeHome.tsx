import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WelcomeHome: React.FC = () => {
  const { t } = useTranslation(["welcomePage"]);
  return (
    <div className="container-fluid h-100 mt-5">
      <div className="d-flex flex-column text-center">
        <h1>{t("title")}</h1>
        <h2>{t("subTitle")}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex align-items-center">
              <h4>{t("labels.multiMath")}</h4>
              <Link className="nav-link active m-0 ps-3" to="/rts/multimath">
                {t("labels.tryMe")}
              </Link>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex align-items-center">
              <h4>{t("labels.library")}</h4>
              <Link className="nav-link active m-0 ps-3" to="/rts/library">
                {t("labels.tryMe")}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeHome;
