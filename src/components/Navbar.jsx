// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import "./Navbar.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={RRNavLink} to="/">
          CloudBreakers MovieApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={RRNavLink} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={RRNavLink} to="/articles">
              Articles
            </Nav.Link>
            <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item as={RRNavLink} to="/login">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dont't have account? Create account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Get Premium Account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div class="search-box">
          <input
            type="text"
            class="search-input"
            placeholder="Search for movies..."
          />
          <i class="search-icon fas fa-search"></i>
        </div>
      </Container>
    </Navbar>
    // <ul>
    //   <li>
    //     <Nav.Link as={RRNavLink} to="/home">
    //       Home
    //     </Nav.Link>
    //   </li>
    //   <li>
    //     <NavLink activeClassName="active" to="/articles">
    //       Articles
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink activeClassName="active" href="/login">
    //       Login
    //     </NavLink>
    //   </li>
    // </ul>
  );
}

export default Navigation;
