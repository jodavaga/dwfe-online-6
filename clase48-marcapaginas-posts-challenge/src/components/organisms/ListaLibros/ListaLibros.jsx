import React from 'react';

import useListaLibros from './hooks/useListaLibros';



function ListaLibros({ title, readCondition }) {

  // const {posts, handleChange} = useListaLibros();
  const [posts, handleChange] = useListaLibros();

  return (
    <div className={`parent ${readCondition ? "no-leidos" : "leidos"}`}>
      <div className="context-title">{title}</div>
      <div className="flex column libros">
        {posts && posts
          .filter((libro) => libro.leido === readCondition)
          .map((libro) => {
            return (
              <div key={libro.id} className="libro">
                <span>{libro.title}</span>
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
