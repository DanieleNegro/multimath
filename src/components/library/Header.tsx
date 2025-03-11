import { useTranslation } from "react-i18next";
import Filters from "./filters/Filters";
import Search from "./search/Search";

const Header: React.FC = () => {
  const { t } = useTranslation(["libraryPage"]);
  return (
    <div className="header d-flex justify-content-center">
      <h2>{t("title")}</h2>
      <Search />
      <Filters />
    </div>
  );
};

export default Header;
