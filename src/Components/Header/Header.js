import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Importing CSS for styling

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="custom-header">
      <Container>
        {/* Navbar Brand with Logo */}
        <Navbar.Brand href="#home" className="brand d-flex align-items-center">
          <img
            src="https://i.postimg.cc/mrBNNhvR/Whats-App-Image-2024-12-28-at-13-36-33-e9265b41-removebg-preview.png"
            alt="Laila International Trading Logo"
            className="header-logo"
          />
<h1 className="header-title ms-2 text-center text-lg-start">
  <b>LAILA INTERNATIONAL TRADING</b>
</h1>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <div className="vertical-line"></div>
            <Nav.Link href="#profile" className="nav-link">Profile</Nav.Link>
            <div className="vertical-line"></div>
            <Nav.Link href="#settings" className="nav-link">Settings</Nav.Link>
            <div className="vertical-line"></div>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <div className="vertical-line"></div>
            <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
