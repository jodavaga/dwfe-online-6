import MainNav from "./components/organisms/MainNav/MainNav";
import MainScreen from "./components/screens/MainScreen/MainScreen";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <MainNav />
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
