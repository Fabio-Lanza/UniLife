import React from "react";
import "./SearchForRooms.css";

function SearchForRooms() {
  return (
    <div className="searchForRooms-container">
      <div className="searchRoom">
        <div className="items">
          <label>Min Bedroom</label>
          <select></select>
        </div>
        <div className="items">
          <label>Min Bathroom</label>
          <select></select>
        </div>
        <div className="items">
          <label>Max Price</label>
          <select></select>
        </div>
        <div className="items">
          <label>Home Type</label>
          <select></select>
        </div>
      </div>
    </div>
  );
}

export default SearchForRooms;
