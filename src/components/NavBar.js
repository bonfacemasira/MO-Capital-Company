import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MO-Capital Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            <Nav.Link href="#pages">Services</Nav.Link>
            {/* <Nav.Link href="#project">Philosophy</Nav.Link> */}
            <Nav.Link href="#project">Team</Nav.Link>
            <NavDropdown title="Philosophy" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
