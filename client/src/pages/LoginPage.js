import {useState} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function LoginPage({setCurrentUser}) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginData)
    }
    e.preventDefault();
    fetch("/login", configObj).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          setCurrentUser(user)
        })
      } else {
        r.json().then((err) => {
          setErrors(err.errors)
        })
      }
    })
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value
    })
  }
  return (
    
      <Container className='login-form' style={{width: "30%"}}>
      <h1 className='text-center'>RotoRoundup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={loginData.username} placeholder="Enter username" onChange={(e) => handleChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={loginData.password} placeholder="Password" onChange={(e) => handleChange(e)}/>
        </Form.Group>
        <Button variant="outline-primary w-100" type="submit">Sign in</Button>
        <div style={{padding: '10px'}} className="text-center">Need an account ? <Link to="/signup">Sign up now</Link></div>
      </Form>
      </Container>
  )
}

export default LoginPage
