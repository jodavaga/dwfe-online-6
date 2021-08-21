import React, { useState, useContext } from "react";

import { AppContext } from "../../../../contexts/ContextProvider";

function useFormulario() {
  // Context
  const { posts, setPosts } = useContext(AppContext);

  // estado del formulario
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // creo el nuevo libro para agregar al contexto
    const newPost = {
      id: Number(posts[posts.length - 1].id) + 1,
      body: inputText,
      title: inputText,
      leido: false,
      userId: 1,
    };

    // actualizo el contexto, libros existentes, mas el nuevo
    setPosts([...posts, newPost]);

    // reset input
    setInputText("");
  };

  const componenteTemporal = <h1>Hola soy un componente desde un HOOK</h1>;

  // return {
  //   inputText,
  //   setInputText,
  //   handleSubmit,
  // };
  return {
    valorInput: inputText,
    setInputText,
    funcionSubmit: handleSubmit,
    componenteTemporal,
  };
}

export default useFormulario;
