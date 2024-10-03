import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MultiMath from "./components/MultiMath";
import { MessageProvider } from "./context/MessageContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <MessageProvider>
        <MultiMath />
      </MessageProvider>
    </div>
  );
};

export default App;
