import React from 'react'
import './SearchBar.css'


function SearchBar() {
    
  return (
    <div className='searchBar-container'>
    <form className='searchBar-form'>
        <input type="text" placeholder='Search by city' />
        <button>Find Homes</button>
    </form>
    </div>
  )
}

export default SearchBar