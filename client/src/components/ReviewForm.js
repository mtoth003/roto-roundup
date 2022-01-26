import React from 'react'

function ReviewForm({reviewFormData, handleChange, handleSubmit}) {

  return (
    <div className='review-form-container'>
      <form onSubmit={handleSubmit}>
        <div className='field rating'>
          <div className='input-area'>
            <input type="number" min="1" max="5" id="rating" value={reviewFormData.rating} onChange={(e) => handleChange(e)} placeholder='Rating 1-5'/>
          </div>
        </div>
        <div className='field comment'>
          <div className='input-area'>
            <input type="text" id="comment" value={reviewFormData.comment} onChange={(e) => handleChange(e)} placeholder='Enter review here'/>
          </div>
        </div>
        <input type="submit" className='submit' value="Submit Review"/>
      </form>
    </div>
  )
}

export default ReviewForm
