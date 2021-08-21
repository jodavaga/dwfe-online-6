import { useState } from "react";
import { API_URL, API_KEY } from "../constants";

const useFetchData = () => {
  const [gifs, setGifs] = useState();
  const [sugerencias, setSugerencias] = useState();

  const fetchBySearch = (terminoBusqueda, limite = 5) => {
    fetch(
      `${API_URL}/gifs/search?api_key=${API_KEY}&q=${terminoBusqueda}&limit=${limite}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGifs(data.data);
      })
      .catch((err) => console.error(err));
  };

  const fetchAutoComplete = (terminoBusqueda) => {
    fetch(`${API_URL}/tags/related/${terminoBusqueda}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Sugerencias:", data.data);
        setSugerencias(data.data);
      })
      .catch((err) => console.error(err));
  };

  return {
    fetchBySearch,
    fetchAutoComplete,
    gifs,
    setGifs,
    setSugerencias,
    sugerencias,
  };
};

export default useFetchData;
