import { Route, Switch } from "react-router-dom";
// Components
import { Home } from "./components/screens/Home";
import { UsersList } from "./components/screens/UsersList";
import { Header } from "./components/organisms/Header";
// others
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
      </Switch>
    </div>
  );
}

export default App;
