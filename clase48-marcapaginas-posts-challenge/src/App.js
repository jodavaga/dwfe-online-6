import React from "react";
import "./styles.css";
import AppProvider from "./contexts/ContextProvider";

// Hooks
import useFetchData from "./hooks/useFetchData";

// Components
import Libros from "./components/pages/Libros/Libros";

export default function App() {
  const { posts, setPosts } = useFetchData();

  return (
    // Envolvemos componentes con acceso al context
    <AppProvider value={{ posts, setPosts }}>
      <div className="App">
        <Libros />
      </div>
    </AppProvider>
  );
}
