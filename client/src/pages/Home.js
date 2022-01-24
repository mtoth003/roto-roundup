import React from 'react'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import PostForm from '../components/PostForm'
import WebsitePage from './WebsitePage'
import ForumPage from './ForumPage'

function Home({websites, forumPosts, setCurrentUser, currentUser}) {
  const [selectedWebsite, setSelectedWebsite] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div>
      <NavBar setCurrentUser={setCurrentUser}/>
      <h3>Welcome {currentUser.username}!</h3>
      <Routes>
        <Route path="/" element={<WebsitePage websites={websites} currentUser={currentUser} setSelectedWebsite={setSelectedWebsite}/>}/>
        <Route path="websites/:id" element={selectedWebsite}/>
        <Route path="/forum_posts" element={<ForumPage currentUser={currentUser} forumPosts={forumPosts} setSelectedPost={setSelectedPost}/>}/>
        <Route path="/forum_posts/:id" element={selectedPost}/>
        <Route path="/forum_posts/create" element={<PostForm/>}/>
      </Routes>
    </div>
  )
}

export default Home