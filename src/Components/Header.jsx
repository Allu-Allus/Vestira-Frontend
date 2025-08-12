import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
     <Navbar expand="lg" style={{ backgroundColor: "#4B0147" }}>
  <Navbar.Brand 
    className="ms-3" 
    href="#home" 
    style={{ 
      color: "#FDFBF9", 
      textDecoration: "none", 
      backgroundColor: "transparent", 
      pointerEvents: "auto" 
    }}>
    Vestira
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

      {/* <Link to={"/"}><Nav.Link href="#home" style={{ color: "#FDFBF9" , textDecoration:"none"}} className="nav-no-underline">Home</Nav.Link></Link> */}
                              <LinkContainer to="/"><Nav.Link  className='text-white'>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/dashboard"><Nav.Link  className='text-white'>Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to="/inventorylist"><Nav.Link  className='text-white'>Inventory List</Nav.Link></LinkContainer>

      

      <NavDropdown 
        title="Profile" 
        id="basic-nav-dropdown" 
        menuVariant="dark">
        <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
      </NavDropdown>

    </Nav>
  </Navbar.Collapse>
</Navbar>


    </>
  )
}

export default Header