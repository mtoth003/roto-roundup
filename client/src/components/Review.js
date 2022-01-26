import {useState} from 'react'
import {FaStar} from 'react-icons/fa'

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

    fetch(`/reviews/${id}`, configObj).then((r) => {
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
    fetch(`/reviews/${id}`, {
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
          <h6>{user}</h6>
          <p>{starRender(rating)}</p>
          <p>{comment}</p>
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
