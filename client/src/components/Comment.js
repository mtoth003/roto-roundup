import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Comment({id, text, user, handleDeleteComment, comments, currentUser, setComments}) {
  const [isEdit, setIsEdit] = useState(null)

  const handleEdit = () => {
    setIsEdit(isEdit => !isEdit)
  }

  const [updateCommentFormData, setUpdateCommentFormData] = useState({text: text})

  const handleChange = e => {
    setUpdateCommentFormData(updateCommentFormData => ({...updateCommentFormData, [e.target.id]: e.target.value}))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const configObj = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateCommentFormData)
    };

    fetch(`/api/comments/${id}`, configObj).then((r) => {
      if(r.ok){
        r.json().then((comment) => {
          const updatedComments = comments.map((comm) => {
            if(comm.id === comment.id){
              return comment
            } else {
              return comm
            }
          })
          setComments(updatedComments)
        })
      } else {
        r.json().then((errors) => {
          console.log(errors)
        })
      }
    })
    setUpdateCommentFormData({text: ""})
    handleEdit()
  }

  const handleDelete = () => {
    fetch(`/api/comments/${id}`, {
      method: "DELETE"
    }).then(r => {
      if(r.ok){
        handleDeleteComment(id)
      }
    })
  }


  
  return (
    <div className='reply-thread'>
      {isEdit ? 
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId="text">
            <Form.Label>Edit</Form.Label>
            <Form.Control as="textarea" rows={3} value={updateCommentFormData.text} onChange={(e) => handleChange(e)} placeholder={text}  />
          </Form.Group>
            <Button variant="outline-success" size="sm" type="submit">Save Reply</Button>
        </Form>
        :
        <div>
          <h6 style={{fontWeight: "bold", color: "blue"}}>{user}</h6>
          <p>{text}</p>
            {user === currentUser.username ? 
            <>
            <Button onClick={handleEdit} variant="outline-secondary" size="sm" type="submit">Edit Reply</Button>
            </>
            :
            null
          }
        </div>
      }
    </div>
  )
}

export default Comment
