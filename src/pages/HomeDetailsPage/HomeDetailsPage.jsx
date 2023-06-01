import React from "react";
import "./HomeDetailsPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { AiOutlineLeft } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

function HomeDetailsPage() {
  const [homeDetails, setHomeDetails] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { detailsId } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/properties/${detailsId}`)
      .then((res) => {
        console.log(res.data);
        setHomeDetails(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homeDetails-container">
      <div className="back-search">
        <AiOutlineLeft />
        <p>Back to Search</p>
      </div>

      <div className="description-container">
        {/* --left-side */}
        <div className="photos-container">
          {homeDetails?.images?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>

        {/* --Right-side */}
        <div className="home-details-container">
          <div className="address-details">
            <p>
              {homeDetails.address?.street}, {homeDetails.address?.city},{" "}
              {homeDetails.address?.postcode}
            </p>
          </div>

          <div className="home-details">
            <div className="items">
              <span>Bedrooms</span>
              <div className="bedrooms">
                <MdOutlineKingBed />
                {homeDetails.bedroom_count}
              </div>
            </div>

            <div className="items">
              <span>Bathrooms</span>
              <div className="bathrooms">
                <FaBath />
                {homeDetails.bathroom_count}
              </div>
            </div>

            <div className="items">
              <span>Property Type</span>
              <div className="prop-type">{homeDetails.property_type}</div>
            </div>

            <div className="items">
              <span>Price</span>
              <div className="price">${homeDetails.rent}</div>
            </div>

            <div className="items">
              <span>Furnished Type</span>
              <div className="furnished">{homeDetails.furnished}</div>
            </div>

            <div className="items">
              <span>Available from</span>
              <div className="available">{homeDetails.availability}</div>
            </div>
          </div>
        <div className="buttons">
          <button>
            <BsSuitHeart />
            Shortlist
          </button>

          <button>Booking Viewing</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetailsPage;
