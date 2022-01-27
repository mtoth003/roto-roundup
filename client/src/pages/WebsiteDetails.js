import React from 'react'
import ReviewContainer from '../components/ReviewContainer'
import {Link} from 'react-router-dom'
import {FaMoneyBillAlt, FaCreativeCommonsNc} from 'react-icons/fa'

function WebsiteDetails({id, siteName, siteUrl, subscriptionPageUrl, imageUrl, features, paidContent, freeContent, currentUser}) {
  return (
  <div className='details-container'>
    <div className='column'>
      <Link to="/">Back to all sites</Link>
      <div className='details-site-name'>
        <h1>{siteName}</h1>
      </div>
      <div className='details-links'>
        <img src={imageUrl} alt={siteName} className="website-details-image"/>
      </div>
      <br></br>
      <a href={siteUrl} target="_blank">{siteName}</a> <a href={subscriptionPageUrl} target="_blank">View Subscription Information</a>
      <div className='details-features'>
        <p>{features}</p>
      </div>
  </div>
  <div className='column'>
    <ReviewContainer id={id} currentUser={currentUser}/>
  </div>
</div>
  )
}

export default WebsiteDetails
