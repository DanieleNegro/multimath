import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MultiMath from "./components/MultiMath";
import { Route, Routes } from "react-router-dom";
import Navabar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="App container-fluid mx-0 px-0">
      <Navabar />
      <Routes>
        <Route path="/multimath" element={<MultiMath />} />
      </Routes>
    </div>
  );
};

export default App;
