import {useState} from 'react'
import WebsiteCard from '../components/WebsiteCard'
import WebsitesSearch from '../components/WebsitesSearch'

function WebsitePage({websites, currentUser, setSelectedWebsite}) {
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("football")
  
  const sportsFilter = websites.filter((website) => website[select])
  
  const searchedWebsites = sportsFilter.filter((website) => website.site_name.toLowerCase().includes(search.toLowerCase()))

  const filterElements = sportsFilter.map(el => {
    return (
      <WebsiteCard
        key={el.id}
        id={el.id}
        siteName={el.site_name}
        siteUrl={el.site_url}
        subscriptionPageUrl={el.subscription_page_url}
        imageUrl={el.image_url}
        features={el.features}
        paidContent={el.paid_content}
        freeContent={el.free_content}
        football={el.football}
        baseball={el.baseball}
        basketball={el.basketball}
        hockey={el.hockey}
        setSelectedWebsite={setSelectedWebsite}
        currentUser={currentUser}
      />
    )
  })


  const searchElements = searchedWebsites.map(el => {
    return (
      <WebsiteCard
        key={el.id}
        id={el.id}
        siteName={el.site_name}
        siteUrl={el.site_url}
        subscriptionPageUrl={el.subscription_page_url}
        imageUrl={el.image_url}
        features={el.features}
        paidContent={el.paid_content}
        freeContent={el.free_content}
        football={el.football}
        baseball={el.baseball}
        basketball={el.basketball}
        hockey={el.hockey}
        setSelectedWebsite={setSelectedWebsite}
        currentUser={currentUser}
      />
    )
  })

  return (
    <div>
      <WebsitesSearch 
        onSearch={setSearch} 
        search={search} 
        setSelect={setSelect}
      />
      <div>
        {search === "" ? filterElements : searchElements}
      </div>
    </div>
  )
}

export default WebsitePage
