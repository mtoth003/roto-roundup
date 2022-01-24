import React from 'react'
import {useState} from 'react'
import CommentContainer from '../components/CommentContainer'

function ForumPost({title, content, likeCount, dislikeCount, username, currentUser, id}) {


  return (
    <div>
      <h3>{title}</h3>
      <h5>{username}</h5>
      <p>{content}</p>
      <CommentContainer id={id} currentUser={currentUser} />
    </div>
  )
}

export default ForumPost
