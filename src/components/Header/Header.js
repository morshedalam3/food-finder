import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = ({ values, handleShow }) => {
  const user = values.email;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("form");
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="maincontainer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <Nav.Link onClick={handleShow}>login</Nav.Link>
              )}
              {user && (
                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Name: {values.name}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Email: {values.email}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar">
        <h1>Studentbook</h1>
        <div>
          <button className="white_btn" onClick={handleLogout}>
            Logout
          </button>
          <Dropdown className="white_btn">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
