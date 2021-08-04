import React from "react";
// import { listaLibros } from "../assets/data/libros";

export const AppContext = React.createContext();

export default function AppProvider({ children, ...rest }) {
  return <AppContext.Provider {...rest}>{children}</AppContext.Provider>;
}
