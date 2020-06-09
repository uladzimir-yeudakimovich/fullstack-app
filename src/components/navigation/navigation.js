import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = ({ user, logout }) => {
  const padding = { padding: 5 }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/anecdotes">anecdotes</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/blogs">blogs</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/countries">countries</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/course">course</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/feedback">feedback</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/phoneBook">phoneBook</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            {user
              ? <em>{user} logged in</em>
              : <Link to="/login">login</Link>
            }
          </Nav.Link>
        </Nav>
        {user
          ? <Button variant="primary" onClick={logout}>logout</Button>
          : <></>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation