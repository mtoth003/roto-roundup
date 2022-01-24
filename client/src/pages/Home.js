import React from 'react'
import {useState} from 'react'
import WebsiteCard from '../components/WebsiteCard'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import ForumContainer from '../components/ForumContainer'
import PostForm from '../components/PostForm'
import WebsitesSearch from '../components/WebsitesSearch'
import WebsitePage from './WebsitePage'
import WebsiteDetails from './WebsiteDetails'
import ForumPage from './ForumPage'

function Home({websites, forumPosts, setCurrentUser, currentUser}) {
  const [selectedWebsite, setSelectedWebsite] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  const forumElements = forumPosts.map(el => {
    return(
      <ForumContainer
        id={el.id}
        title={el.title}
        content={el.content}
        likeCount={el.like_count}
        dislikeCount={el.dislike_count}
        currentUser={currentUser}
        setSelectedPost={setSelectedPost}
        username={el.username}
        userId={el.user_id}
      />
    )
  })

  return (
    <div>
      <NavBar setCurrentUser={setCurrentUser}/>
      <h3>Welcome {currentUser.username}!</h3>
      <Routes>
        <Route path="/" element={<WebsitePage websites={websites} currentUser={currentUser} setSelectedWebsite={setSelectedWebsite}/>}/>
        <Route path="websites/:id" element={selectedWebsite}/>
        <Route path="/forum_posts" element={<ForumPage forumPosts={forumPosts} setSelectedPost={setSelectedPost}/>}/>
        <Route path="/forum_posts/:id" element={selectedPost}/>
        <Route path="/forum_posts/create" element={<PostForm/>}/>
      </Routes>
    </div>
  )
}

export default Home