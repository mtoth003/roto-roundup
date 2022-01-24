import {useState} from 'react'
import {Link} from 'react-router-dom'
import ForumContainer from '../components/ForumContainer'
import PostForm from '../components/PostForm'

function ForumPage({forumPosts, currentUser, setSelectedPost}) {
  const [search, setSearch] = useState("")

  const searchedPosts = forumPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
  
  const forumElements = searchedPosts.map(el => {
    return(
      <ForumContainer
        key={el.id}
        id={el.id}
        title={el.title}
        content={el.content}
        likeCount={el.like_count}
        dislikeCount={el.dislike_count}
        currentUser={currentUser}
        setSelectedPost={setSelectedPost}
        username={el.username}
        userId={el.user_id}
        createdAt={el.created_at}
      />
    )
  })


  const handleClick = e => {
    return (
      <PostForm />
    )
  }

  return (
    <>
      <input type="text" placeholder='Search for a post' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <Link to={'/forum_posts/create'} >
      <input type="submit" value="Create Post" onClick={handleClick} />
      </Link>
      <div>
        {forumElements}
      </div>
    </>
  )
}

export default ForumPage
