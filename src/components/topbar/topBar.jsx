import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import image from '../../image/logo.png';

import "./topBar.css";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Navbar bg="light" expand='md' className="topbar">
      <Container>
        <Navbar.Brand href="#">
          <img className="header_icon" src={image} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <img className="header_icon" src={image} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">
                <Link className="link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Religion" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/religion">Orthodox</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/islam">
                    Islam
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Catholic
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Jehovah
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">
                  Only-Jesus
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  Adventist
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="link" to="/videos">
                  Videos
                </Link>
              </Nav.Link>
              <Nav.Link><Link className="link" to="/write">
                Write
              </Link></Nav.Link>
              <Nav.Link><Link className="link" onClick={handleLogout}>
                {user && "LOGOUT"}
              </Link></Nav.Link>
              <Nav.Link ><Link className="link" to="/contactus">Contact Us</Link></Nav.Link>
              <Nav.Link href="#action12" className="login-btn">
                <Link className="link" to="/login">
                  Login           |
                </Link>
              </Nav.Link>
              <Nav.Link><li className="topListItem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
              </Nav.Link>

              <Nav.Link>
                <div class='search-box'>
                  <input class="search-text" type="text" placeholder="Search Anything" />
                  <a href="#" class="search-btn">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar >
  )
}

