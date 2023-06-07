import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TopBanner from "./../../components/TopBanner/TopBanner";
import SearchForRooms from "../../components/SearchForRooms/SearchForRooms";
import PropertyCards from "../../components/PropertyCards/PropertyCards";

function CityDetails() {
  const [singleCity, setSingleCity] = useState("");
  const { cityId } = useParams();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}/cities/${cityId}`)
      .then((res) => {
        console.log(res.data);
        setSingleCity(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <TopBanner
        title="Search Accommodation"
        subTitle="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
      <SearchForRooms />

      <PropertyCards />
    </div>
  );
}

export default CityDetails;
