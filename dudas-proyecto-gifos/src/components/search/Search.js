import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const Search = () => {
  const {
    fetchBySearch,
    gifs,
    fetchAutoComplete,
    sugerencias,
    setSugerencias,
  } = useFetchData();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    fetchBySearch(search);

    setSearch("");
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    if (search.length >= 3) {
      fetchAutoComplete(search);
      return;
    }

    setSugerencias(null);
  };

  const handleClickOption = (e) => {
    console.log("click en", e.target.value);
    const seleccionado = e.target.value;

    fetchBySearch(seleccionado);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Busca un gif"
          autoComplete="off"
          onChange={handleChange}
          value={search}
          list="sugerencias"
        />
        <button>Buscar</button>
      </form>

      <div>
        {
          sugerencias && (
            <select
              name="misSugerencias"
              id="sugerencias"
              onChange={handleClickOption}
            >
              {sugerencias.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )
          // <datalist name="misSugerencias" id="sugerencias">
          //   {sugerencias.map((item) => {
          //     return (
          //       <option
          //         key={item.name}
          //         value={item.name}
          //         onClick={handleClickOption}
          //       />
          //     );
          //   })}
          // </datalist>
        }
      </div>

      <div>
        {gifs &&
          gifs.map((elemento) => {
            return <img src={elemento.images.fixed_height.url} />;
          })}
      </div>
    </div>
  );
};

export default Search;
