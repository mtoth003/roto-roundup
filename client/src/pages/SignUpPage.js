import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function SignUpPage({setCurrentUser}) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }

    fetch("/signup", configObj).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          setCurrentUser(user);
          navigate("/")
        })
      } else {
        r.json().then((errors) => {
          console.log(errors)
        })
      }
    })
  }
  return (

    <Container className="signin-form" style={{width: "30%"}}>
       <h1 className='text-center'>RotoRoundup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={formData.first_name} onChange={(e) => handleChange(e)} placeholder='Enter First Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={formData.last_name} onChange={(e) => handleChange(e)} placeholder='Enter Last Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={formData.username} onChange={(e) => handleChange(e)} placeholder='Enter Username' />
        </Form.Group>
        <Form.Group className='mb-3' controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={formData.email} onChange={(e) => handleChange(e)} placeholder='Enter Email Address' />
        </Form.Group>
        <Form.Group className='mb-3' controlId="firstName">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={formData.password} onChange={(e) => handleChange(e)} placeholder='Enter Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId="firstName">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" value={formData.password_confirmation} onChange={(e) => handleChange(e)} placeholder='Confirm Password' />
        </Form.Group>
        <Button variant="outline-primary w-100" type="submit">Sign up</Button>
        <div style={{padding: '10px'}} className="text-center">Already registered ? <Link to="/">Sign in</Link></div>
        </Form>
    </Container>
  )
}

export default SignUpPage
