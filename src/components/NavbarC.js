import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

class NavbarC extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="https://baranacikgoz.github.io/Employee-Management-App/">Employee Managent App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/Nickhill28">
              <i className="fab fa-github fa-2x"></i>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nicknshe">
              <i className="fab fa-linkedin fa-2x"></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/users">
              Database & Operations
            </Link>
            <Link className="nav-link" to="/adduser">
              Employee Add
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarC;