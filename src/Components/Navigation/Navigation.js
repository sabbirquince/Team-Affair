import React from "react";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";

const Navigation = (props) => {
  const { setSearchValue } = props;

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="navigation">
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <div className="container-xl">
          <Navbar.Brand className="text-light nav_brand" href="/">
            Team Affair
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="">Nothing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
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
