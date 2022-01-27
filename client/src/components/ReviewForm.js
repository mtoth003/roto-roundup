import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function ReviewForm({reviewFormData, handleChange, handleSubmit}) {

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" min="1" max="5" value={reviewFormData.rating} onChange={(e) => handleChange(e)} placeholder='Rating 1-5'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} value={reviewFormData.comment} onChange={(e) => handleChange(e)} placeholder='Enter your review'  />
        </Form.Group>
        <Button variant="outline-secondary w-100" type="submit">Submit Review</Button>
      </Form>
    </Container>
  )
}

export default ReviewForm
