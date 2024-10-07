import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navabar: React.FC = () => {
  return (
    <nav className="bg-orange navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand">React Typscript App</span>
          </Link>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/multimath">
              MultiMath
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
