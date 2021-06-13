import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/img/ONEE.jpeg";
import "./FooterButtons.css";
export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="yellow" variant="dark" expand="md">
      <Navbar.Brand>
        {" "}
        <img src={logo} alt="logo" width="65px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard" className="neonBTN">
            <button className="HeaderBTN">L'interface</button>
          </Nav.Link>
          <Nav.Link href="/dashboard" className="neonBTN">
            <button className="HeaderBTN">Les Tickets</button>
          </Nav.Link>
          <Nav.Link href="/dashboard" className="neonBTN">
            <button className="HeaderBTN">Se Deconnecter</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
