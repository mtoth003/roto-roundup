import React from 'react'
import { Link } from 'react-router-dom'
import WebsiteDetails from '../pages/WebsiteDetails'


function WebsiteCard({id, siteName, siteUrl, subscriptionPageUrl, imageUrl, features, paidContent, freeContent, football, baseball, basketball, hockey, setSelectedWebsite, currentUser}) {
  const buildWebsite = () => {
    setSelectedWebsite(
      <WebsiteDetails
        id={id}
        siteName={siteName}
        siteUrl={siteUrl}
        subscriptionPageUrl={subscriptionPageUrl}
        imageUrl={imageUrl}
        features={features}
        paidContent={paidContent}
        freeContent={freeContent}
        football={football}
        baseball={baseball}
        basketball={basketball}
        hockey={hockey}
        currentUser={currentUser}
        setSelectedWebsite={setSelectedWebsite}
      />
    )
  }

  const footballRender = (input) => {
    if(input === true){
      return "football"
    } else {
      return ""
    }
  }

  const baseballRender = (input) => {
    if(input === true){
      return "baseball"
    } else {
      return ""
    }
  }

  const basketballRender = (input) => {
    if(input === true){
      return "basketball"
    } else {
      return ""
    }
  }

  const hockeyRender = (input) => {
    if(input === true){
      return "hockey"
    } else {
      return ""
    }
  }
  
  return (
    <Link to={`/websites/${id}`} onClick={buildWebsite}>
      <div className='website-card'>
        <h3>{siteName}</h3>
        <img src={imageUrl} alt="website image" className='website-card-image' style={{height: "350px", width: "350px"}}/>
        <p>{footballRender(football)}</p>
        <p>{baseballRender(baseball)}</p>
        <p>{basketballRender(basketball)}</p>
        <p>{hockeyRender(hockey)}</p>
      </div>
    </Link>
  )
}

export default WebsiteCard