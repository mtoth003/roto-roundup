import React from 'react'

function ForumPost({title, content, likeCount, dislikeCount, username, currentUser}) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{username}</h5>
      <p>{content}</p>
      <p>{likeCount}</p>
      <p>{dislikeCount}</p>
    </div>
  )
}

export default ForumPost
