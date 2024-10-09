import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navabar from "./components/navbar/Navbar";
import WelcomeHome from "./components/home/WelcomeHome";
import Spinner from "./shared/Spinner";

const MultiMath = lazy(() => import("./components/MultiMath"));
const Library = lazy(() => import("./components/Library"));

const App: React.FC = () => {
  return (
    <div className="App container-fluid mx-0 px-0">
      <Navabar />
      <Routes>
        <Route path="/" element={<WelcomeHome />} />
        <Route
          path="/multimath"
          element={
            <Suspense fallback={<Spinner />}>
              <MultiMath />
            </Suspense>
          }
        />
        <Route
          path="/library"
          element={
            <Suspense fallback={<Spinner />}>
              <Library />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
