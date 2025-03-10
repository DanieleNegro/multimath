import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navabar from "./components/navbar/Navbar";
import WelcomeHome from "./components/home/WelcomeHome";
import MultiMath from "./components/MultiMath";
import Library from "./components/library/Library";
import "./localization/i18n";

const App: React.FC = () => {
  return (
    <div className="App container-fluid mx-0 px-0">
      <Navabar />
      <Routes>
        <Route path="/" element={<Navigate to={"/rts"} />} />
        <Route path="/rts" element={<WelcomeHome />} />
        <Route path="/rts/multimath" element={<MultiMath />} />
        <Route path="/rts/library" element={<Library />} />
      </Routes>
    </div>
  );
};

export default App;
