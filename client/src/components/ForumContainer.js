import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ForumPosts from '../pages/ForumPost'
import PostForm from './PostForm'

function ForumContainer({title, content, likeCount, dislikeCount, currentUser, username, userId, setSelectedPost, id}) {

  const truncatedContent = (input) => input.length > 10 ? `${input.substring(0, 10)}...` : input
  
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

  const handleClick = e => {
    return (
      <PostForm />
    )
  }

  return (
    <>
    <Link to={'/forum_posts/create'} >
        <input type="submit" value="Create Post" onClick={handleClick} />
    </Link>
  
    <div>
      <Link to={`/forum_posts/${id}`} onClick={buildForumPost}>
        <h1>{title}</h1>
      </Link>
        <p>created by: {username}</p>
        <p>{truncatedContent(content)}</p>
    </div>
    </>
  )
}

export default ForumContainer
