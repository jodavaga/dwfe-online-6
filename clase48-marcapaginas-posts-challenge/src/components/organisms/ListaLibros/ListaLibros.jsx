import React, {useContext} from 'react';

// Contexto
import {AppContext} from '../../../contexts/ContextProvider'

function ListaLibros({ title, readCondition }) {
  // Consume context
  const { posts, setPosts } = useContext(AppContext);

  const handleChange = (event) => {
    event.persist();
    const { id, checked } = event.target;
    
    // Update 'leido' prop to checked posts
    const modifiedLibros = posts.map((libro) => {
      if (libro.id === Number(id)) {
        return {
          ...libro,
          leido: checked,
        };
      }
      return libro;
    });

    // update contenxt data
    setPosts(modifiedLibros);
  };


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
