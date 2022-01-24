import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ForumPosts from '../pages/ForumPost'
import PostForm from './PostForm'

function ForumContainer({title, content, likeCount, dislikeCount, currentUser, username, userId, setSelectedPost, id, createdAt}) {

  const truncatedContent = (input) => input.length > 10 ? `${input.substring(0, 10)}...` : input

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
  
  const buildForumPost = () => {
    setSelectedPost(
      <ForumPosts
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
   
  
    <div>
      <Link to={`/forum_posts/${id}`} onClick={buildForumPost}>
        <h1>{title}</h1>
      </Link>
        <p>By: {username}</p>
        <span>created: {timeSince(parseTime(createdAt))} ago</span>
        <p>{truncatedContent(content)}</p>
    </div>
    </>
  )
}

export default ForumContainer
