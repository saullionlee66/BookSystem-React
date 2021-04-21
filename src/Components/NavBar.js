import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Book System</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/update">Update</Nav.Link>
          <Nav.Link href="/delete">Delete</Nav.Link>
        </Nav>
      </Navbar>

    )
}

export default NavBar
