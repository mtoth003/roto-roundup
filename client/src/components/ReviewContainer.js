import {useState, useEffect} from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'

function ReviewContainer({id, currentUser}) {
  const [reviews, setReviews] = useState([])
  const [reviewFormData, setReviewFormData] = useState({
    rating: "",
    comment: "",
    website_id: id,
  })

  const handleChange = e => {
    setReviewFormData({...reviewFormData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewFormData),
    };

    fetch("/reviews", configObj).then((r) => {
      if(r.ok){
        r.json().then((review) => {
          setReviews([...reviews, review])
          console.log(review)
        });
        } else {
          r.json().then(errors => {
            console.log(errors)
          })
        }
      })
      setReviewFormData({
        comment: "",
        rating: "",
        website_id: id})
    }

    function handleDeleteReview(reviewToDeleteId){
      const updatedReviews = reviews.filter((review) => review.id !== reviewToDeleteId)
      setReviews(updatedReviews)
    }

    useEffect(() => {
      fetch(`/reviews/websites/${id}`)
      .then(r => r.json())
      .then(data => setReviews(data))
    }, [id])

    const totalReviews = reviews.length

    const displayReviews = reviews.map((review) => {
      return(
        <Review
          key={review.id}
          id={review.id}
          rating={review.rating}
          comment={review.comment}
          user={review.username}
          handleDeleteReview={handleDeleteReview}
          handleSubmit={handleSubmit}
          reviews={reviews}
          currentUser={currentUser}
          setReviews={setReviews}
        />
      )
    })

  return (
    <div id="review-container">
      <h3 style={{textAlign: "center"}}>{totalReviews} user reviews</h3>
      {displayReviews}
      <h3 style={{textAlign: "center", padding: "10px"}}>Provide Feedback</h3>
      <ReviewForm
        reviewFormData={reviewFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default ReviewContainer
