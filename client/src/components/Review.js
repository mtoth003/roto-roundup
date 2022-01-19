import {useState} from 'react'

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

    fetch(`api/reviews/${id}`, configObj).then((r) => {
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
    fetch(`api/reviews/${id}`, {
      method: "DELETE"
    }).then(r => {
      if(r.ok){
        handleDeleteReview(id)
      }
    })
  }

  return (
    <div>
      {isEdit ?
        <form className="review-form" onSubmit={handleSubmit}>
          <h4>{user}</h4>
          <div className="field rating">
            <div className="input-area">
              <p>Rating:
                <input type="number" min="1" max="5" id="rating" value={updateReviewFormData.rating} onChange={(e) => handleChange(e)} placeholder={rating} />
              </p>
            </div>
          </div>
          <div className="field comment">
            <div className="input-area">
              <p>Comment:
                <input type="text" id="comment" value={updateReviewFormData.comment} onChange={(e) => handleChange(e)} placeholder={comment} />
              </p>
            </div>
          </div>
            <input type="submit" className="submit" value="Save Review" />
        </form>
        :
        <div>
          <h4>{user}</h4>
          <p>Rating: {rating}</p>
          <p>Comment: {comment}</p>
          {user === currentUser.username ?
            <>
              <button onClick={handleEdit}>Edit Review</button>
              <button onClick={handleDelete}>Delete Review</button>
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
