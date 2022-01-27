import {useState} from 'react'
import {useNavigate} from 'react-router'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function PostForm() {
  const [posts, setPosts] = useState([])
  const [postFormData, setPostFormData] = useState({
    title: "",
    content: "",
    like_count: 0,
    dislike_count: 0,
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setPostFormData({...postFormData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(postFormData),
    };

    fetch("/api/forum_posts", configObj).then((res) => {
      if(res.ok){
        res.json().then((post) => {
          setPosts([...posts, post])
          navigate("/forum_posts")
          window.location.reload(false)
        })
      } else {
        res.json().then(errors => {
          console.log(errors)
        })
      }
    })
    setPostFormData({
      title: "",
      content: "",
      like_count: 0,
      dislike_count: 0,
    })
  }
  return (
    <Container style={{padding: "20px", border: '3px solid #0000CD', borderRadius: "5px", marginTop: '50px'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId="title" style={{fontWeight: "bold", fontSize: "30px"}}>
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" onChange={(e) => handleChange(e)} placeholder='Enter your subject'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId="content">
          <Form.Control as="textarea" rows={10} onChange={(e) => handleChange(e)} placeholder='Enter your message'  />
        </Form.Group>
        <Button variant="success" type="submit">Submit</Button> <Button variant="outline-primary" href="/forum_posts">Back</Button>
      </Form>
  </Container>
  )
}

export default PostForm
