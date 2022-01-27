import React from 'react'
import CommentContainer from '../components/CommentContainer'

function ForumPost({title, content, username, currentUser, id}) {

  return (
    <div className='post-thread-container'>
      <h2 style={{fontWeight: "bold"}}>{title}</h2>
      <h6 style={{fontWeight: "bold", color: "blue"}}>{username}</h6>
      <p>{content}</p>
      <CommentContainer id={id} currentUser={currentUser} username={username} />
    </div>
  )
}

export default ForumPost
