import React, { useContext } from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import logo from "../../images/logo.png";

const Navigation = (props) => {
  const { setSearchValue } = props;

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <div className="navigation ">
      <Navbar className="navigation-bar" fixed="top" variant="dark" expand="lg">
        <div className="container-xl p-2">
          <Navbar.Brand className="text-light nav_brand" href="/">
            <img className="brand-logo" src={logo} alt="" /> Team Affair
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="px-2 py-3 py-lg-0 text-light" to="/home">
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
                className="mr-sm-2 mb-2 mb-lg-0 mt-2 mt-lg-0 search"
                onChange={handleSearch}
              />
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
