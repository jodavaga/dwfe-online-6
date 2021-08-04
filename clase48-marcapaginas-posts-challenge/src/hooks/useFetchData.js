import { useState, useEffect } from "react";

function useFetchData() {
  const [posts, setPosts] = useState();

  // Add 'leido' prop to each object
  const createNewData = (lists) => {
    const newPostsArray = lists.map((item) => ({ ...item, leido: false }));

    setPosts(newPostsArray);
  };

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        // Set fetch response data
        createNewData(posts);
      })
      .catch((err) => console.error(err));

    console.log("solo una vez");
  }, []);

  // Promise to fetch posts
  const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => posts)
      .catch((err) => console.error(err));
  };

  return {
    posts,
    setPosts,
  };
}

export default useFetchData;
