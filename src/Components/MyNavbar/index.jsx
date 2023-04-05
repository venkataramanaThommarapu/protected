import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function MyNavbar() {
  

  const myCount = useSelector((state) => state.Rajesh.value);

  return (
    <Navbar bg="warning" className="nav-style text-white" expand="lg">
      <Navbar.Brand className="ms-5" as={NavLink} to="/">
        My Todoapp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
     
          <Nav.Link as={NavLink} to="/todo" className="me-5">
            Todo
            <Badge pill variant="danger" className="ms-1">
              {myCount}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
