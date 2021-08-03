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
    <div className="App nivel1">
      <DataProvider>
        <Alpha />
        <Beta />
        <Gamma />
      </DataProvider>
    </div>
  );
}

export default App;
