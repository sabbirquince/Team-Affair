import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";

function App() {
  return (
    <Router>
      <div className="bg-secondary root">
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/home">
            <Main />
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
