import React from 'react'
import ManageUsers from './ManageUsers'
import {Link} from 'react-router-dom'

function AccountPage({currentUser}) {
  return (
    <div>
      <h3>Username: {currentUser.username}</h3>
      <h3>Email: {currentUser.email}</h3>
      <h6>{currentUser.admin === true ? <Link to="/users">Manage Users</Link> : ""}</h6>
    </div>
  )
}

export default AccountPage
