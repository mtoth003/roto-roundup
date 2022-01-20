import React from 'react'

function WebsitesSearch({search, onSearch}) {
  return (
    <div>
      <input type="text" placeholder="Search sites by name" value={search} onChange={(e) => onSearch(e.target.value)}/>
    </div>
  )
}

export default WebsitesSearch
