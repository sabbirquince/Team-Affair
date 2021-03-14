import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";
import react, { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Router>
      <div className="bg-secondary root">
        <Navigation setSearchValue={setSearchValue} />

        <Switch>
          <Route exact path="/">
            <Main searchValue={searchValue} />
          </Route>
          <Route exact path="/home">
            <Main searchValue={searchValue} />
          </Route>
          <Route path="/team/:id">
            <TeamDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
