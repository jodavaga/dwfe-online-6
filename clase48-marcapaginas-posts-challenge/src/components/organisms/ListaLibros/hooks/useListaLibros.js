import { useContext } from "react";

// Contexto
import { AppContext } from "../../../../contexts/ContextProvider";

function useListaLibros() {
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

  // return { posts, handleChange };
  // export array of object, functions
  return [posts, handleChange];
}

export default useListaLibros;
