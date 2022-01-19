import React from 'react'
import { Link } from 'react-router-dom'
import WebsiteDetails from '../pages/WebsiteDetails'

function WebsiteCard({id, site_name, site_url, subscription_page_url, image_url, features, paid_content, free_content, football, baseball, basketball, hockey, setSelectedWebsite, currentUser}) {
  
  const buildWebsite = () => {
    setSelectedWebsite(
      <WebsiteDetails
        id={id}
        site_name={site_name}
        site_url={site_url}
        subscription_page_url={subscription_page_url}
        image_url={image_url}
        features={features}
        paid_content={paid_content}
        free_content={free_content}
        football={football}
        baseball={baseball}
        basketball={basketball}
        hockey={hockey}
        currentUser={currentUser}
      />
    )
  }
  
  return (
    <Link to={`/websites/${id}`} onClick={buildWebsite}>
      <div className='website-card'>
        <h3>{site_name}</h3>
        <img src={image_url} alt="website image" className='website-card-image' style={{height: "350px", width: "350px"}}/>
        <p>{football}</p>
        <p>{baseball}</p>
        <p>{basketball}</p>
        <p>{hockey}</p>
      </div>
    </Link>
  )
}

export default WebsiteCard
