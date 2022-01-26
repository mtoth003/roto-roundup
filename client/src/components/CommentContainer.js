import {useState, useEffect}from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

function CommentContainer({id, currentUser}) {
  const [comments, setComments] = useState([])
  const [commentFormData, setCommentFormData] = useState({text: "", forum_post_id: id})

  const handleChange = e => {
    setCommentFormData({...commentFormData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(commentFormData),
    };

    fetch("/comments", configObj).then((r) => {
      if(r.ok){
        r.json().then((comment) => {
        setComments([...comments, comment])
        console.log(comment)
        })
      } else {
        r.json().then(errors => {
          console.log(errors)
        })
      }
    })
    setCommentFormData({text: "", forum_post_id: id})
  }

  function handleDeleteComment(commentToDeleteId){
    const updatedComments = comments.filter((comment) => comment.id !== commentToDeleteId)
    setComments(updatedComments)
  }

  useEffect(() => {
    fetch(`/comments/forum_posts/${id}`)
    .then(r => r.json())
    .then(data => setComments(data))
  }, [id])

  

  const displayComments = comments.map((comment) => {
    return(
      <Comment 
        key={comment.id}
        id={comment.id}
        text={comment.text}
        user={comment.username}
        handleDeleteComment={handleDeleteComment}
        handleSubmit={handleSubmit}
        commentFormData={commentFormData}
        comments={comments}
        currentUser={currentUser}
        setComments={setComments}
      />
    )
  })

  return (
    <div>
      {displayComments}
      <CommentForm
        commentFormData={commentFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default CommentContainer
