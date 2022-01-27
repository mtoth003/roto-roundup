import {useState} from 'react'

function ManageUsers({id, firstName, lastName, username, email, users}) {
  const [userToDelte, setUserToDelte] = useState([])


  const handleDeleteUser = (userToDeleteId) => {
    const upDatedUsers = users.filter((user) => user.id != userToDeleteId)
    setUserToDelte(upDatedUsers)
  }
  
  const handleDelete = () => {
    fetch(`/api/users/${id}`, {
      method: "DELETE",
    }).then(r => {
      if(r.ok){
        handleDeleteUser(id)
        window.location.reload()
      }
    })
  }
  
  return (
    <div>
      <p>Name: {firstName} {lastName}</p>
      <p>Username: {username}</p>
      <p>Email Address: {email}</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}

export default ManageUsers
