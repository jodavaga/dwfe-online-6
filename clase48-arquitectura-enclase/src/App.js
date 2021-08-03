import React from "react";
// Components
import { Alpha } from "./components/pages/Alpha";
import { Beta } from "./components/pages/Beta";
import { Gamma } from "./components/pages/Gamma";

// Styles
import "./index.css";

function App() {
  return (
    <div className="App nivel1">
      <Alpha />
      <Beta />
      <Gamma />
    </div>
  );
}

export default App;
