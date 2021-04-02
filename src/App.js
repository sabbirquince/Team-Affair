import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";
import react, { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";

// LOGIN CONTEXT
export const LoginContext = createContext();

function App() {
  // user's login state
  const [loggedIn, setLoggedIn] = useState({});

  // search value state
  const [searchValue, setSearchValue] = useState("");

  return (
    <Router>
      <div className="bg-secondary root">
        <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
          <Navigation setSearchValue={setSearchValue} />

          <Switch>
            <Route exact path="/">
              <Main searchValue={searchValue} />
            </Route>

            <Route exact path="/home">
              <Main searchValue={searchValue} />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/team/:id">
              <TeamDetail />
            </PrivateRoute>
          </Switch>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
