import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";

// LOGIN CONTEXT
export const LoginContext = createContext();

function App() {
  // user's login state
  const [loggedIn, setLoggedIn] = useState({});

  // search value state
  const [searchValue, setSearchValue] = useState("");

  return (
    <Router>
      <div className=" root">
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

            <Route path="/team/:id">
              <TeamDetail />
            </Route>
          </Switch>
        </LoginContext.Provider>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
