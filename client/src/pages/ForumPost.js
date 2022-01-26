import React from 'react'
import CommentContainer from '../components/CommentContainer'

function ForumPost({title, content, username, currentUser, id}) {
  console.log(currentUser)

  return (
    <div>
      <h3>{title}</h3>
      <h5>{username}</h5>
      <p>{content}</p>
      <CommentContainer id={id} currentUser={currentUser} username={username} />
    </div>
  )
}

export default ForumPost
