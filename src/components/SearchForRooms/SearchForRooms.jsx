import {useEffect, useState} from "react";
import "./SearchForRooms.css";
import axios from 'axios'

function SearchForRooms() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [cityProperties, setCityProperties] = useState([]);
  const [query, setQuery] = useState('');

  const numCount = [1, 2, 3, 4, 5, 6]

  const filterProperties = (id, bedroom,bathroom,price)=>{
    const query={
      city_id:id,
      bedroom_count:bedroom,
      bathroom_count:bathroom,
      rent:price 
    }
  }
 
 const handleBedroom = (e)=> {
 setQuery(e.target.value)
 }
 
 
  useEffect(() => {
    axios
      .post(`${baseUrl}/properties/filter`,{query})
      .then((res) => {
        console.log(res.data)
        setCityProperties(res.data.response)
        
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="searchForRooms-container">
      <div className="searchRoom">
        <div className="items">
          <label>Min Bedroom</label>
          <select onChange={()=>filterProperties(4)} >
          <option selected>Min Bedroom</option>
          {numCount.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Min Bathroom</label>
          <select>
          <option selected>Min Bathroom</option>
          {numCount.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Max Price</label>
          <select>
          <option selected>Max Price</option>
          </select>
        </div>
        <div className="items">
          <label>Home Type</label>
          <select>
          <option selected>Home Type</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchForRooms;
