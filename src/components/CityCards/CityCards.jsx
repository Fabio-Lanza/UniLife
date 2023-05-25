import React from 'react'
import './CityCards.css'
import { useState, useEffect } from "react";
import axios from "axios";

function CityCards() {
const [cityCards, setCityCards] = useState([])
const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}/cities?limit=9`)
    .then((res)=> {
      setCityCards(res.data.response)
    })
    .catch((error)=> console.log(error));
  }, []);

  return (
    <>
    <div className='city-grid'>
      {cityCards.map((cities)=> (
        <div key={cities.id} className='city-content'>
          <img src={cities.image_url} alt="cities" />
          <div className="city-info">
          <p>{cities.name}</p>
          <span>{cities.property_count} properties</span>
          </div>
        </div>
      ))}
    </div>
    <div>
    <button className="all-cities-btn">
      See All Cities
    </button>
    </div>
    </>
  )
}

export default CityCards