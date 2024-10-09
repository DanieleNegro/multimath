import React from "react";
import { Link } from "react-router-dom";

const WelcomeHome: React.FC = () => {
  return (
    <div className="container-fluid h-100 mt-5">
      <div className="d-flex flex-column text-center">
        <h1>Welcome home in this React Typescript App</h1>
        <h2>This app has two pages:</h2>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex align-items-center">
              <h4>MultiMath: enjoy with multiplication table</h4>
              <Link className="nav-link active m-0 ps-3" to="/multimath">
                Try me!
              </Link>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex align-items-center">
              <h4>Library manager</h4>
              <Link className="nav-link active m-0 ps-3" to="/library">
                Try me!
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeHome;
