import React from 'react'
import {useState} from 'react'
import WebsiteCard from '../components/WebsiteCard'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'

function Home({websites, setCurrentUser, currentUser}) {
  const [selectedWebsite, setSelectedWebsite] = useState(null)

  const websiteElements = websites.map(el => {
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

  console.log(websiteElements)

  return (
    <div>
      <NavBar setCurrentUser={setCurrentUser}/>
      <h1>Welcome {currentUser.username}!</h1>
      <Routes>
        <Route path="/" element={websiteElements}/>
        <Route path="/websites/:id" element={selectedWebsite}/>
      </Routes>
    </div>
  )
}

export default Home
