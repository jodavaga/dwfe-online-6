import React from "react";

import useFormulario from "./hooks/useFormulario";

import "../../../styles.css";

function Formulario() {

  const objetoRetorno = useFormulario();
  // Destructuro el objeto de retorno del HOOK
  const {valorInput, funcionSubmit, setInputText, componenteTemporal} = objetoRetorno;
 

  return (
    <div className="flex column">
      <div className="parents-title">Agregar Libros</div>
      <div className="flex flex-center">
        <form onSubmit={funcionSubmit}>
          <input
            type="text"
            name="libro"
            placeholder="Nombre del libro"
            autoComplete="off"
            value={valorInput}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button> Agregar </button>
        </form>
      </div>
      {componenteTemporal}
    </div>
  );
}

export default Formulario;
