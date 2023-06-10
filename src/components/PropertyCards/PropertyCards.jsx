import { useState, useEffect } from "react";
import "./PropertyCards.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import testimonial from "../../assets/images/testimonial.png";

function PropertyCards({ propertyCityDetails, propertyCity }) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  

  


  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/properties/city/${cityId}`)
  //     .then((res) => {
  //       console.log(res.data.response);
  //       setPropertyCity(res.data);
  //       setPropertyCityDetails(res.data.response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);


  return (
    <div className="propertyCity-container">
      <h2>
        <span>{propertyCity.total}</span> homes in <span className="city-name">{propertyCity.city_name}</span>
      </h2>

      <div className="propertyCity-details">
        {propertyCityDetails.map((cityDetails) => (
          <div className="property-card" key={cityDetails.id}>
            <img src={cityDetails.images[0]} />

            <div className="price-accommodation">
              <div>
                <p>${cityDetails.rent}</p>
                <p>Included Bills</p>
              </div>
              <div className="accommodation-icons">
                <BiBed />
                <span>{cityDetails?.bedroom_count}</span>
                <FaBath />
                <span>{cityDetails.bathroom_count}</span>
              </div>
            </div>

            <div className="furnished">
              <p>{cityDetails.property_type}</p>
              <p>{cityDetails.furnished}</p>
            </div>

            <div className="address">
              <MdLocationPin />
              <p>{cityDetails.address.street}</p>
              <p>{cityDetails.address.city}</p>
              <p>{cityDetails.address.postcode}</p>
            </div>

            <Link to={`/homeDetails/${cityDetails._id}`} className="viewHome-btn">
              <AiOutlineHome />
              <p>View Home</p>
            </Link>
            
          </div>
        ))}
      </div>

      {/* ---Testimonial-Banner */}
      <div className="testimonial-banner">
        <div className="left-Side">
          <h2>Being a student in <span>{propertyCity.city_name}</span></h2>
          <p>
            Leeds is a lively and multicultural city with a large student
            population. It is quite a compact city, so it is easy to get around
            and has a community feel. Leeds is the perfect mix of city and town
            life and has something to offer to anyone who calls it home.
          </p>
          <p>
            Leeds is home to three universities, the University of Leeds, Leeds
            Trinity University and Leeds Beckett University
          </p>
        </div>
        <div className="right-side">
          <img src={testimonial} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PropertyCards;
