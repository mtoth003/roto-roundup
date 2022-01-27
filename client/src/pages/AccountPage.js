import React from 'react'
import ManageUsers from './ManageUsers'
import {Link} from 'react-router-dom'

function AccountPage({currentUser}) {
  console.log(currentUser)
  return (
    <div>
      <h3>Username: {currentUser.username}</h3>
      <h3>Email: {currentUser.email}</h3>
      <h3>Threads Created: {currentUser.forum_posts.length}</h3>
      <h3>Total Reviews: {currentUser.reviews.length}</h3>
      <h3>Thread Replies: {currentUser.comments.length}</h3>
      <h6>{currentUser.admin === true ? <Link to="/users">Manage Users</Link> : ""}</h6>
    </div>
  )
}

export default AccountPage
