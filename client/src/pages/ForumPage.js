import {useState} from 'react'
import {Link} from 'react-router-dom'
import ForumContainer from '../components/ForumContainer'
import PostForm from '../components/PostForm'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
        forumPosts={forumPosts}
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
      <Container style={{width: "50%", padding: "15px"}}>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Threads"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={'/forum_posts/create'}>
          <Button variant="outline-secondary" id="button-addon2" type="submit" onClick={handleClick}>
            Create Thread
          </Button>
        </Link>
        </InputGroup>
      </Container>
      <div className='forum-container'>
      <h1 className='thread-title'>Topics</h1>
      {forumElements}
      </div>
    </>
  )
}

export default ForumPage
