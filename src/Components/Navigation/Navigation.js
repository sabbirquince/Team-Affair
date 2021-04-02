import React, { useContext } from "react";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";

const Navigation = (props) => {
  const { setSearchValue } = props;

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <div className="navigation ">
      <Navbar
        className="navigation-bar"
        fixed="top"
        variant="light"
        expand="lg"
      >
        <div className="container-xl p-2">
          <Navbar.Brand className="text-light nav_brand" href="/">
            Team Affair
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="px-2 text-light" to="/home">
                Home
              </Link>

              {loggedIn?.email ? (
                <Link
                  onClick={() => setLoggedIn({})}
                  className="px-2 text-light"
                  to="/login"
                >
                  Log out
                </Link>
              ) : (
                <Link className="px-2 text-light" to="/login">
                  Log in
                </Link>
              )}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search"
                onChange={handleSearch}
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
