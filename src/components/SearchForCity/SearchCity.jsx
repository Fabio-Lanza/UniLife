import React from 'react'
import './SearchCity.css'


function SearchCity() {

  return (
   
    <div className='searchBar-container'>
    <form className='searchCity-form'>
        <input type="text" placeholder='Search by city' />
        <button>Find Homes</button>
    </form>
    </div>
  )
}

export default SearchCity