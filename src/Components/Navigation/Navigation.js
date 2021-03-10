import React from "react";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";

const Navigation = () => {
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
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
