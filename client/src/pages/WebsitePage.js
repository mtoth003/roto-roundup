import {useState, useEffect} from 'react'
import {Route} from "react-router-dom"
import WebsiteCard from '../components/WebsiteCard'
import WebsitesSearch from '../components/WebsitesSearch'

function WebsitePage({websites, currentUser, setCurrentUser, setSelectedWebsite}) {
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("football")
  
  const sportsFilter = websites.filter((website) => website[select])
  
  const searchedWebsites = sportsFilter.filter((website) => website.site_name.toLowerCase().includes(search.toLowerCase()))
  // const baseballFilter = websites.filter((website) => website.baseball)
  // const basketballFilter = websites.filter((website) => website.basketball)
  // const hockeyFilter = websites.filter((website) => website.hockey)

  // console.log(hockeyFilter)

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       siteName: 'siteName',
  //     }
  //   }
  //   const sortProperty = types[type]
  //   const sorted = [...websites].sort((a,b) => b[sortProperty] - a[sortProperty])
  //   setData(sorted)
  // })

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

  const renderPage = () => {
    if(search === ""){
      return filterElements
    } else {
      return searchElements
    }
  }

  return (
    <div>
      <WebsitesSearch 
        onSearch={setSearch} 
        search={search} 
        setSelect={setSelect}
      />
      <div>
        {renderPage()}
      </div>
    </div>
  )
}

export default WebsitePage
