import React from 'react'
import {useState} from 'react'
import WebsiteCard from '../components/WebsiteCard'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import ForumContainer from '../components/ForumContainer'
import PostForm from '../components/PostForm'
import WebsitesSearch from '../components/WebsitesSearch'

function Home({websites, forumPosts, setCurrentUser, currentUser}) {
  const [selectedWebsite, setSelectedWebsite] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [search, setSearch] = useState("")

  const filteredWebsites = websites.filter((website) => website.site_name.toLowerCase().includes(search.toLowerCase()))

  const websiteElements = filteredWebsites.map(el => {
    return (
      <WebsiteCard
        key={el.id}
        id={el.id}
        site_name={el.site_name}
        site_url={el.site_url}
        subscription_page_url={el.subscription_page_url}
        image_url={el.image_url}
        features={el.features}
        paid_content={el.paid_content}
        free_content={el.free_content}
        football={el.football}
        baseball={el.baseball}
        basketball={el.basketball}
        hockey={el.hockey}
        setSelectedWebsite={setSelectedWebsite}
        currentUser={currentUser}
      />
    )
  })

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
      <WebsitesSearch onSearch={setSearch} search={search} />
      <Routes>
        <Route path="/" element={websiteElements}/>
        <Route path="/websites/:id" element={selectedWebsite}/>
        <Route path="/forum_posts" element={forumElements}/>
        <Route path="/forum_posts/:id" element={selectedPost}/>
        <Route path="/forum_posts/create" element={<PostForm/>}/>
      </Routes>
    </div>
  )
}

export default Home