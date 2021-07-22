import React from "react";
import { Link } from "react-router-dom";

import "./MainNav.css";

export default function MainNav() {
  return (
    <div className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/eventos">Eventos</Link>
      </li>
      <li>
        <Link to="/cursos">Cursos</Link>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
    </div>
  );
}
