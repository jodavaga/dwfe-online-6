import React from "react";
// Components
import { Alpha } from "./components/pages/Alpha";
import { Beta } from "./components/pages/Beta";
import { Gamma } from "./components/pages/Gamma";

// Provider
import DataProvider from "./contexts/DataContext";

// Styles
import "./index.css";

function App() {
  return (
    <DataProvider>
      <div className="App nivel1">
        <Alpha />
        <Beta />
        <Gamma />
      </div>
    </DataProvider>
  );
}

export default App;
