import React from 'react'
import {Link} from 'react-router-dom'

function AccountPage({currentUser}) {
  return (
    <>
      <div className='profile-container'>
        <h1>Profile</h1>
        <h3>Username: {currentUser.username}</h3>
        <h3>Email: {currentUser.email}</h3>
        <h6>{currentUser.admin === true ? <Link to="/users">Manage Users</Link> : ""}</h6>
      </div>
      <div className='stats-container'>
        <h1>Activity Stats</h1>
        <h3>Threads Created: {currentUser.forum_posts.length}</h3>
        <h3>Total Reviews: {currentUser.reviews.length}</h3>
        <h3>Thread Replies: {currentUser.comments.length}</h3>
      </div>
    </>
  )
}

export default AccountPage
