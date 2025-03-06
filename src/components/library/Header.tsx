import Filters from "./filters/Filters";
import Search from "./search/Search";

const Header: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <h2>Library</h2>
      <Search />
      <Filters />
    </div>
  );
};

export default Header;
