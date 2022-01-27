import React from 'react'
import { Link } from 'react-router-dom'
import WebsiteDetails from '../pages/WebsiteDetails'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {MdSportsBasketball} from 'react-icons/md'
import {FaFootballBall} from 'react-icons/fa'
import {GiBaseballGlove} from 'react-icons/gi'
import {GiHockey} from 'react-icons/gi'
import {FaStar} from 'react-icons/fa'


function WebsiteCard({id, siteName, siteUrl, subscriptionPageUrl, imageUrl, features, paidContent, freeContent, football, baseball, basketball, hockey, setSelectedWebsite, currentUser, avgRating}) {
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
      return <FaFootballBall size={45} color={"#825736"} />
    } else {
      return ""
    }
  }

  const baseballRender = (input) => {
    if(input === true){
      return <GiBaseballGlove size={45} color={"#a67a5b"}/>
    } else {
      return ""
    }
  }

  const basketballRender = (input) => {
    if(input === true){
      return <MdSportsBasketball size={45} color={"#b43b08"}/>
    } else {
      return ""
    }
  }

  const hockeyRender = (input) => {
    if(input === true){
      return <GiHockey size={45} />
    } else {
      return ""
    }
  }
  
  const starRender = (input) => {
    const styledStar = <FaStar size={25} color="gold"/>
    if(input > 0 && input < 2){
      return <>{styledStar}</>
    } else if (input >= 2 && input < 3){
      return <>{styledStar} {styledStar}</>
    } else if (input >=3 && input < 4){
      return <>{styledStar} {styledStar} {styledStar}</>
    } else if (input >= 4 && input < 5){
      return <>{styledStar} {styledStar} {styledStar} {styledStar}</>
    } else if (input >= 5){
      return <>{styledStar} {styledStar} {styledStar} {styledStar} {styledStar}</>
    }
  } 

  return (
    <Container>
      <Card style={{ width: '60%' }}>
        <Card.Img variant="top" style={{height: "350px", width: "100%"}} src={imageUrl} />
        <Card.Body>
          <Card.Title className="text-center">{siteName}</Card.Title>
          <Card.Text style={{textAlign: 'center'}}>{starRender(avgRating)}</Card.Text>
          <Card.Text style={{ textAlign: "center"}}>
            {footballRender(football)} {baseballRender(baseball)} {basketballRender(basketball)} {hockeyRender(hockey)}
          </Card.Text>
          <Link to={`/websites/${id}`}><Button variant="outline-secondary w-100" onClick={buildWebsite}>View Site Details</Button></Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default WebsiteCard