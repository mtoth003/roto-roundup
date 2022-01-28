import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ForumPost from '../pages/ForumPost'
import Button from 'react-bootstrap/Button'

function ForumContainer({forumPosts, title, content, likeCount, dislikeCount, currentUser, username, userId, setSelectedPost, id, createdAt}) {
  const [posts, setPosts] = useState([])
  const truncatedContent = (input) => input.length > 15 ? `${input.substring(0, 15)}...` : input

  const navigate = useNavigate()

  const parseTime = (created_at) => {
    const date = new Date(created_at)
    return date.getTime()
  }

  function timeSince(date) {

    const seconds = Math.floor((new Date().getTime() - date) / 1000);

    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const handleDeleteThread = (threadToDeleteId) => {
    const updatedThreads = forumPosts.filter((forumPost) => forumPost.id !== threadToDeleteId)
    setPosts(updatedThreads)
  }

  const handleDelete = () => {
    fetch(`/api/forum_posts/${id}`, {
      method: "DELETE"
    }).then(r => {
      if(r.ok){
        handleDeleteThread(id)
        navigate("/forum_posts")
        window.location.reload()
      }
    })
  }
  
  const buildForumPost = () => {
    setSelectedPost(
      <ForumPost
        title={title}
        content={content}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        currentUser={currentUser}
        username={username}
        id={id}
      />
    )
  }


  return (
    <>
      <div className='post-container'>
        <Link className='forum-title' to={`/forum_posts/${id}`} onClick={buildForumPost}>
          <h3 className='forum-container-title'>{title} </h3> {currentUser.admin === true ? <Button style={{float: "right"}} size="sm" variant='outline-danger' onClick={handleDelete}>Delete Thread</Button> :  null}
        </Link>
          <p>Created: {timeSince(parseTime(createdAt))} ago - {username} </p>
          <p>{truncatedContent(content)}</p>
      </div>
    </>
  )
}

export default ForumContainer
