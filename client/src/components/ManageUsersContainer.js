import React from 'react'
import ManageUsers from '../pages/ManageUsers'

function ManageUsersContainer({users}) {
  console.log(users)
  const displayUsers = users.map((user) => {
    return(
      <ManageUsers 
        key={user.id}
        id={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        username={user.username}
        email={user.email}
        users={users}
        forumPosts={users.forumPosts}
      />
    )
  })
  return (
    <div>
      <h1>Total Users: {users.length}</h1>
      {displayUsers}
    </div>
  )
}

export default ManageUsersContainer
