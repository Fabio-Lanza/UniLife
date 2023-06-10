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
  const [cityData, setCityData] = useState([]);
  const [propertyCity, setPropertyCity] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    axios
      .get(`${baseUrl}/properties/city/${cityId}`)
      .then((res) => {
        console.log(res.data.response);
        console.log(res.data);
        
        setPropertyCity(res.data);
        setCityData(res.data.response);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <TopBanner
        title="Search Accommodation"
        subTitle="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
      <SearchForRooms properties={cityData} setProperties={setCityData} cityId={cityId}/>

      <PropertyCards propertyCityDetails={cityData} propertyCity={propertyCity} cityId={cityId}/>
    </div>
  );
}

export default CityDetails;
