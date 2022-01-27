import React from 'react'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import PostForm from '../components/PostForm'
import WebsitePage from './WebsitePage'
import ForumPage from './ForumPage'
import Header from '../components/Header'
import AccountPage from './AccountPage'
import ManageUsersContainer from '../components/ManageUsersContainer'

function Home({websites, forumPosts, setCurrentUser, currentUser, users}) {
  const [selectedWebsite, setSelectedWebsite] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Header />
      <Routes>
        <Route path="/" element={<WebsitePage websites={websites} currentUser={currentUser} setSelectedWebsite={setSelectedWebsite}/>}/>
        <Route path="/websites/:id" element={selectedWebsite}/>
        <Route path="/forum_posts" element={<ForumPage currentUser={currentUser} forumPosts={forumPosts} setSelectedPost={setSelectedPost}/>}/>
        <Route path="/forum_posts/:id" element={selectedPost}/>
        <Route path="/forum_posts/create" element={<PostForm/>}/>
        <Route path="/account" element={<AccountPage currentUser={currentUser}/>}/>
        <Route path="/users" element={<ManageUsersContainer users={users}/>}/>
      </Routes>
    </div>
  )
}

export default Home