import React from 'react'
import {useState} from 'react'
import LikeCount from '../components/LikeCount'

function ForumPost({title, content, likeCount, dislikeCount, username, currentUser, id}) {
//   const [updatedLikes, setUpdatedLikes] = useState({likeCount: likeCount})

//   const handleChange = (e) => {
//     setUpdatedLikes(updatedLikes => ({...updatedLikes, [e.target.id]: e.target.value}))
//   }

//  const handleClick = e => {
//    const configObj = {
//      method: "PUT",
//      headers: {"Content-Type": "appliation/json"},
//      body: JSON.stringify(updatedLikes)
//    };

//    fetch(`/forum_posts/${id}`, configObj).then((r) => {
//      if(r.ok){
//        r.json().then((updatedLike) => {
//          setUpdatedLikes(updatedLike.likeCount + 1)
//        })
//      } else {
//        r.json().then(errors => {
//          console.log(errors)
//        })
//      }
//    })
//    setUpdatedLikes({likeCount: likeCount})
//  }

  return (
    <div>
      <h3>{title}</h3>
      <h5>{username}</h5>
      <p>{content}</p>
      {/* <button onChange={(e) => handleChange(e)} onClick={handleClick}>Up vote</button>
      <p>{likeCount}</p> */}
      <LikeCount />
    </div>
  )
}

export default ForumPost
