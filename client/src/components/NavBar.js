import React from 'react'
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router'


function NavBar({setCurrentUser}) {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    setCurrentUser(null);
    fetch("api/logout", { method: "DELETE" });
    navigate('/')
};
  return (
    <div>
      <NavLink to="/">RotoRoundup</NavLink>
      <NavLink to="/forum_posts">Forum</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar