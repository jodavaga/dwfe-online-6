import React, {useContext} from 'react';

// Contexto
import {AppContext} from '../../../contexts/ContextProvider'

function ListaLibros({ title, readCondition }) {
  const { libros, setLibros } = useContext(AppContext);

  const handleChange = (event) => {
    event.persist();
    const { id, checked } = event.target;
    const modifiedLibros = libros.map((libro) => {
      if (libro.id === id) {
        return {
          ...libro,
          leido: checked,
        };
      }
      return libro;
    });
    setLibros(modifiedLibros);
  };


  return (
    <div className={`parent ${readCondition ? "no-leidos" : "leidos"}`}>
      <div className="context-title">{title}</div>
      <div className="flex column libros">
        {libros
          .filter((libro) => libro.leido === readCondition)
          .map((libro) => {
            return (
              <div key={libro.id} className="libro">
                <span>{libro.nombre}</span>
                <input
                  id={libro.id}
                  onChange={handleChange}
                  checked={libro.leido}
                  className="check"
                  type="checkbox"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListaLibros;
