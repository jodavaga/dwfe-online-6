import React, { useContext, useState } from "react";
import { AppContext } from "../../../contexts/ContextProvider";

import "../../../styles.css";

function Formulario() {
  // Context
  const {libros, setLibros} = useContext(AppContext);

  // estado del formulario
  const [nombre, setNombre] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    // creo el nuevo libro para agregar al contexto
    const newBook = {
      id: (parseInt(libros[libros.length - 1].id) + 1).toString(), 
      nombre: nombre, 
      leido: false 
    }
    
    // actualizo el contexto, libros existentes, mas el nuevo
    setLibros([
      ...libros,
      newBook
    ]);

    // reset input
    setNombre('');
  };

  return (
    <div className="flex column">
      <div className="parents-title">Agregar Libros</div>
      <div className="flex flex-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="libro"
            placeholder="Nombre del libro"
            autoComplete="off"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <button> Agregar </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
