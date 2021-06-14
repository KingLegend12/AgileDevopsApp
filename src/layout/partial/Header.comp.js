import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/img/ONEE.jpeg";
import "./FooterButtons.css";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
export const Header = () => {
  const history = useHistory();
  const logMeOut = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="65px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>
              <Button variant="outline-light" size="lg" className="HeaderBTN">
                L'interface
              </Button>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>
              <Button variant="outline-light" size="lg" className="HeaderBTN">
                Les tickets
              </Button>
            </Nav.Link>
          </LinkContainer>
          <Nav.Link>
            <Button variant="outline-light" size="lg" className="HeaderBTN">
              Se Deconnecter
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
