import React from 'react'
import {useNavigate} from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function NavBar({setCurrentUser, currentUser}) {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
    navigate('/')
};
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="/">RotoRoundup</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Sites</Nav.Link>
          <Nav.Link href="/forum_posts">Forum</Nav.Link>
          <Nav.Link href="/account">My Account</Nav.Link>
        </Nav>
        <Navbar.Text>Signed in as: <Link style={{textDecoration: "none"}} to="/account">{currentUser.username}</Link> {currentUser.admin === true ? " (admin)" : null}</Navbar.Text>
      </Container>
      <Button variant="outline-light" onClick={handleLogout} className="mr-auto" style={{margin: 10}}>Logout</Button>
    </Navbar>
  )
}

export default NavBar