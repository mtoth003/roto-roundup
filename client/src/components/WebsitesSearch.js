import {useState} from 'react'

function WebsitesSearch({search, onSearch, setSelect}) {
  
  const all = ["football" + "baseball" + "basketball" + "hockey"]

  return (
    <div>
      <input type="text" placeholder="Search sites by name" value={search} onChange={(e) => onSearch(e.target.value)}/>
    <div>
      <select onChange={(e) => setSelect(e.target.value)} >
        <option value="football">All</option>
        <option value="football">Football</option>
        <option value="baseball">Baseball</option>
        <option value="basketball">Basketball</option>
        <option value="hockey">Hockey</option>
      </select>
    </div>
    </div>
  )
}

export default WebsitesSearch
