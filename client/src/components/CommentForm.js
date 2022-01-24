import React from 'react'

function CommentForm({commentFormData, handleChange, handleSubmit}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Post Reply</h2>
        <input type="text" id="text" value={commentFormData.text} onChange={(e) => handleChange(e)} placeholder='Enter your message'/>
        <input type="submit" value="Post"/>
      </form>
    </div>
  )
}

export default CommentForm
