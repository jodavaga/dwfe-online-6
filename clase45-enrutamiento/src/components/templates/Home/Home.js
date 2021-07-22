import React from "react";
import logo from "./logo.svg";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <h1>Soy el Home</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
