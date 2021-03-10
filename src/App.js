import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
// import { Route, Router, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";

function App() {
  return (
    <Router>
      <div className="bg-dark">
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/team/:id">
            <TeamDetail />
          </Route>

          <Route
            exact
            path="/team/twitter"
            render={() => {
              window.location.href = "www.twitter.com";
              return null;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
