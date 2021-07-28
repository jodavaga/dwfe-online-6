import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

// Components
import { Profile } from "../molecules/Profile";

export const UsersList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((e) => new Error(e));
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/users"
          render={() => {
            return (
              <div>
                <h1>Users to show</h1>
                <ul>
                  {users?.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link to={`/users/${item.id}`}>{item.login}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }}
        />
        <Route exact path="/users/:id" render={() => <Profile />} />
      </Switch>
    </div>
  );
};
