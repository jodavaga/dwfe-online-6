import React from 'react';

// Components
import ListaLibros from '../../organisms/ListaLibros/ListaLibros'
import Formulario from '../../molecules/Formulario/Formulario';

function Libros() {
  return (
    <div className="parents">
      <div className="flex column">
        <div className="parents-title">MARCAPÁGINAS</div>
        <div className="flex flex-center">
          <ListaLibros title="Libros por leer" readCondition={false} />
          <ListaLibros title="Libros leidos" readCondition={true} />
        </div>
        <Formulario />
      </div>
    </div>
  );
}

export default Libros