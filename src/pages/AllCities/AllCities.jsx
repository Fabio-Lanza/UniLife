import React from "react";
import './AllCities.css'
import banner from "../../assets/images/downtown.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function AllCities() {
    const [allCities, setAllCities] = useState([])
const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseUrl}/cities?limit=20`)
        .then((res)=> {
          console.log(res.data.response)
         setAllCities(res.data.response)
        })
        .catch((error)=> console.log(error));
      }, []);

  return (
    <>
      
        <div className="banner-allCities">
          <img src={banner} alt="" />

          <div className="banner-text">
            <p>Student Accomodation</p>
            <p>
              UniLife have student accommodation available across the UK.
              Whatever you’re after, we can help you find the right student
              accommodation for you.
            </p>
          </div>
        </div>

        <div className="allCities">
           <h3>Search by City</h3>
        <div className="allCities-grid">
        {allCities.map((cities)=> (
            <div key={cities.id} className='allCities-content'>
               <p>{cities.name}</p> 
            </div>
        ))}
        </div>
        </div>
     
    </>
  );
}

export default AllCities;
