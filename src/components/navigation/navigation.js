import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { removeUser } from '../../reducers/auth-reducer'

const Navigation = ({ user }) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(removeUser())
  }

  const padding = {
    padding: 5,
    // color: 'white',
    textTransform: 'uppercase'
  }

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
            <Link style={padding} to="/users">users</Link>
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
              ? <em>{user.user.name ? user.user.name : user.user.login} logged in</em>
              : <Link style={padding} to="/login">login</Link>
            }
          </Nav.Link>
          <Nav.Link href="#" as="span">
            {user ? <></> : <Link style={padding} to="/registration">registration</Link>}
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