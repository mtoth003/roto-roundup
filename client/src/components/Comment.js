import {useState} from 'react'

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
    <div>
      {isEdit ? 
        <form className='comment-form' onSubmit={handleSubmit}>
          <h3>Post Reply</h3>
          <input type="text" id="text" value={updateCommentFormData.text} onChange={(e) => handleChange(e)} placeholder={text} />
          <input type="submit" value="Save comment" />
        </form>
        :
        <div>
          <h5>{user}</h5>
          <p>{text}</p>
          {user === currentUser.username ? 
            <>
            <button onClick={handleEdit}>Edit Comment</button>
            <button onClick={handleDelete}>Delete Comment</button>
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
