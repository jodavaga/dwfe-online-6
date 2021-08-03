import React from "react";
// Importamos createContext
import { createContext } from "react";

// Data
import { contextoData } from "../assets/dataContexto";

// Creamos el contexto
export const DataContext = createContext();

// Provider con su value
export default function DataProvider({ children }) {
  return (
    <DataContext.Provider value={contextoData}>{children}</DataContext.Provider>
  );
}
