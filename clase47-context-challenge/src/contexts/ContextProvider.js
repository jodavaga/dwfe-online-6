import React, { useState } from "react";
import { listaLibros } from "../assets/data/libros";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [libros, setLibros] = useState(listaLibros);

  return (
    <AppContext.Provider value={{ libros, setLibros }}>
      {children}
    </AppContext.Provider>
  );
}
