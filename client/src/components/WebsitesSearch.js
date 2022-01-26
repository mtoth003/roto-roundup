function WebsitesSearch({search, onSearch, setSelect}) {

  return (
    <>
    <div className='sites-search'>
      <input type="text" placeholder="Search sites by name" value={search} onChange={(e) => onSearch(e.target.value)}/>
    </div>
    <div className='sites-filter'>
      <select onChange={(e) => setSelect(e.target.value)} className="box">
        <option value="football">All</option>
        <option value="football">Football</option>
        <option value="baseball">Baseball</option>
        <option value="basketball">Basketball</option>
        <option value="hockey">Hockey</option>
      </select>
    </div>
    </>
  )
}

export default WebsitesSearch
