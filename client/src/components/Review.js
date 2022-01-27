import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Review({user, comment, rating, id, handleDeleteReview, setReviews, reviews, currentUser}) {
  const [isEdit, setIsEdit] = useState(null)

  const handleEdit = () => {
    setIsEdit(isEdit => !isEdit)
  }

  const [updateReviewFormData, setUpdateReviewFormData] = useState({
    comment: comment,
    rating: rating,
  })

  const handleChange = (e) => {
    setUpdateReviewFormData(updateReviewFormData => ({ ...updateReviewFormData, [e.target.id]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault()

    const configObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReviewFormData)
    };

    fetch(`/api/reviews/${id}`, configObj).then((r) => {
      if(r.ok){
        r.json().then((review) => {
          const updatedReviews = reviews.map((rev) => {
            if(rev.id === review.id) {
              return review
            } else {
              return rev
            }
          })
          setReviews(updatedReviews)
        })
      } else {
        r.json().then((errors) => {
          console.log(errors)
        })
      }
    })
    setUpdateReviewFormData({
      rating: "",
      comment: "",
    })
    handleEdit()
  }

  const handleDelete = () => {
    fetch(`/api/reviews/${id}`, {
      method: "DELETE"
    }).then(r => {
      if(r.ok){
        handleDeleteReview(id)
      }
    })
  }

  const starRender = (input) => {
    const styledStar = <FaStar size={15} color="gold"/>
    if(input > 0 && input < 2){
      return <>{styledStar}</>
    } else if (input >= 2 && input < 3){
      return <>{styledStar} {styledStar}</>
    } else if (input >=3 && input < 4){
      return <>{styledStar} {styledStar} {styledStar}</>
    } else if (input >= 4 && input < 5){
      return <>{styledStar} {styledStar} {styledStar} {styledStar}</>
    } else if (input >= 5){
      return <>{styledStar} {styledStar} {styledStar} {styledStar} {styledStar}</>
    }
  }

  return (
    <div>
      {isEdit ?
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" min="1" max="5" value={updateReviewFormData.rating} onChange={(e) => handleChange(e)} placeholder={rating}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={2} value={updateReviewFormData.comment} onChange={(e) => handleChange(e)} placeholder={comment}  />
            </Form.Group>
              <Button variant="outline-success" size="sm" type="submit">Save Review</Button>
          </Form>
        </Container>
        :
        <div className="reviews-container">
          <h6>{user}</h6>
          <p>{starRender(rating)}</p>
          <p>{comment}</p>
          {user === currentUser.username ?
            <>
              <Button variant="outline-secondary" size="sm" onClick={handleEdit}>Edit Review</Button>
              <Button variant="outline-danger" size="sm" onClick={handleDelete}>Delete Review</Button>
            </>
            :
            null
          }
        </div>
      }
    </div>
  )
}

export default Review
