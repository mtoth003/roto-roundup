import React from 'react'
import ReviewContainer from '../components/ReviewContainer'
import {Link} from 'react-router-dom'

function WebsiteDetails({id, siteName, siteUrl, subscriptionPageUrl, imageUrl, features, paidContent, freeContent, football, baseball, basketball, hockey, currentUser}) {
  return (
<div>
  <Link to="/">Back to all sites</Link>
  <h1>{siteName}</h1>
  <img src={imageUrl} alt={siteName} id="website-details-image"/>
  <a href={siteUrl} target="_blank">{siteName}</a>
  <a href={subscriptionPageUrl} target="_blank">Subscribe here</a>
  <p>{features}</p>
  <ReviewContainer id={id} currentUser={currentUser}/>
</div>
  )
}

export default WebsiteDetails
