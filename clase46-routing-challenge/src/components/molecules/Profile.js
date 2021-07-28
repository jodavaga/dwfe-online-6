import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((e) => new Error(e));
  }, [id]);

  return (
    <div>
      <h1>
        {user && user.name ? user.name?.toUpperCase() : "User sin nombre"}
      </h1>
      <p>
        <a href={user?.html_url} target="_blank" rel="noreferrer">
          link to profile
        </a>
      </p>

      <Link to="/users">Volver</Link>
    </div>
  );
};
