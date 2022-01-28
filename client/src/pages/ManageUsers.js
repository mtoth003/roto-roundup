import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ManageUsers({id, firstName, lastName, username, email, users}) {
  const [userToDelte, setUserToDelte] = useState([])

  const navigate = useNavigate()

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
        navigate("/account")
        window.location.reload(false)
      }
    })
  }
  
  return (
    <div className='user-info'>
      <p>Name: {firstName} {lastName}</p>
      <Button variant="outline-danger" style={{float: "right"}} onClick={handleDelete}>Delete User</Button>
      <p>Username: {username}</p>
      <p>Email Address: {email}</p>
    </div>
  )
}

export default ManageUsers
