import React from "react";
import { Route } from "react-router-dom";

import Home from "../../templates/Home/Home";
import Eventos from "../../templates/Eventos/Eventos";
import Cursos from "../../templates/Cursos/Cursos";
import Contacto from "../../templates/Contacto/Contacto";

import "./MainScreen.css";

export default function Main() {
  return (
    <div className="mainScreen">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/eventos">
        <Eventos />
      </Route>
      <Route path="/cursos">
        <Cursos />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
    </div>
  );
}
