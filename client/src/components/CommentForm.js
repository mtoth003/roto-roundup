import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function CommentForm({commentFormData, handleChange, handleSubmit}) {
  return (
    <Container style={{padding: "20px", border: '2px solid #708090', borderRadius: "5px", marginTop: '50px', marginBottom: "15px", float: "left", width: "50%"}}>
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId="text" style={{fontWeight: "bold", fontSize: "30px"}}>
        <Form.Label>Reply</Form.Label>
        <Form.Control as="textarea" rows={8} value={commentFormData.text} onChange={(e) => handleChange(e)} placeholder='Enter your message'/>
      </Form.Group>
      <Button variant="success" type="submit">Reply</Button> <Button variant="outline-primary" href="/forum_posts">Back</Button>
    </Form>
</Container>
  )
}

export default CommentForm
