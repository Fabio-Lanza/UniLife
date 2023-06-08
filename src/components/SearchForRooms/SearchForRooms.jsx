import {useEffect, useState} from "react";
import "./SearchForRooms.css";
import axios from 'axios'

function SearchForRooms({ properties, setProperties, cityId}) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [cityProperties, setCityProperties] = useState(properties);
  const [queryState, setQueryState] = useState('');

  const numCount = [1, 2, 3, 4, 5, 6]

  const filterProperties = ( bedroom)=>{ console.log(bedroom)
    const query={
      city_id: cityId,
      bedroom_count:bedroom,
      bathroom_count: 2,
      rent:5000, 
  } 
  console.log(query)
  setQueryState(query)
  }

  useEffect(() => { console.log('useEffect running')
  console.log(queryState)
    axios
      .post(`${baseUrl}/properties/filter`,{queryState})
      .then((res) => {
        console.log(res.data)
        if(res.data.status === 200){
          setProperties(res.data.response)
        }
        // setCityProperties(res.data.response)
        
        
      })
      .catch((error) => console.log(error));
  }, [queryState]);
 

//  const handleBedroom = (e)=> {
//  setQuery(e.target.value)
//  }
 
 

  return (
    <div className="searchForRooms-container">
      <div className="searchRoom">
        <div className="items">
          <label>Min Bedroom</label>
          <select onChange={(e)=>filterProperties(e.target.value)} >
          <option selected>Min Bedroom</option>
          {numCount.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Min Bathroom</label>
          <select >
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
