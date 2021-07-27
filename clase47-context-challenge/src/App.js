import React from "react";
import "./styles.css";
import AppProvider from "./contexts/ContextProvider";

// Components
import Libros from "./components/pages/Libros/Libros";

export default function App() {
  return (
    // Envolvemos componentes con acceso al context
    <AppProvider>
      <div className="App">
        <Libros />
      </div>
    </AppProvider>
  );
}
