import React from 'react'
import ReviewContainer from '../components/ReviewContainer'
import {Link} from 'react-router-dom'
import {FaMoneyBillAlt, FaCreativeCommonsNc} from 'react-icons/fa'

function WebsiteDetails({id, siteName, siteUrl, subscriptionPageUrl, imageUrl, features, paidContent, freeContent, currentUser, football, baseball, basketball, hockey}) {

  const paidRender = (input) => {
    if (input === true){
      return <FaMoneyBillAlt size={65} />
    } else {
      return ""
    }
  }

  const freeRender = (input) => {
    if (input === true){
      return <FaCreativeCommonsNc size={55}/>
    } else {
      return ""
    }
  }

  const footballRender = (input) => {
    if(input === true){
      return "Football "
    } else {
      return ""
    }
  }

  const baseballRender = (input) => {
    if(input === true){
      return "/ Baseball "
    } else {
      return ""
    }
  }

  const basketballRender = (input) => {
    if(input === true){
      return " / Basketball"
    } else {
      return ""
    }
  }

  const hockeyRender = (input) => {
    if(input === true){
      return " / Hockey"
    } else {
      return ""
    }
  }

  return (
  <div className='details-container'>
    <div className='column'>
      <Link to="/">Back to all sites</Link>
      <div className='details-site-name'>
        <h1>{siteName}</h1>
      </div>
      <div className='details-image'>
        <img src={imageUrl} alt={siteName} className="website-details-image"/>
      </div>
      <div className='details-icons'>
        {freeRender(freeContent)} {paidRender(paidContent)}
      </div>
      <div className='details-links'>
      <a href={siteUrl} target="_blank">{siteName}</a> / <a href={subscriptionPageUrl} target="_blank">View Subscription Information</a>
      </div>
      <div className='details-sports'>
        Sports Covered: {footballRender(football)} {baseballRender(baseball)} {basketballRender(basketball)} {hockeyRender(hockey)}
      </div>
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
