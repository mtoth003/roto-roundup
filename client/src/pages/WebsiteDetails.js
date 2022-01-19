import React from 'react'
import ReviewContainer from '../components/ReviewContainer'

function WebsiteDetails({id, site_name, site_url, subscription_page_url, image_url, features, paid_content, free_content, football, baseball, basketball, hockey, currentUser}) {
  return (
    <div>
      <h1>{site_name}</h1>
      <img src={image_url} alt={site_name} id="website-details-image"/>
      <a href={site_url} target="_blank">{site_name}</a>
      <a href={subscription_page_url} target="_blank">Subscribe here</a>
      <p>{features}</p>
      <ReviewContainer id={id} currentUser={currentUser}/>
    </div>
  )
}

export default WebsiteDetails
