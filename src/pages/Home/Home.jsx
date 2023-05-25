import React from "react";
import "./Home.css";
import banner from "../../assets/images/downtown.jpg";
import SearchBar from "../../components/SearchBar/SearchBAr";
import CityCards from "../../components/CityCards/CityCards";
import searchIcon from "../../assets/images/search-icon.png";
import compareIcon from "../../assets/images/compare-icon.png";
import billsIcon from "../../assets/images/bills-icon.png";
import bestSelectionIcon from "../../assets/images/bestSelectionIcon.png";
import bestSelectionPhoto from "../../assets/images/bestSelectionPhoto.png";
import heartIcon from "../../assets/images/heartIcon.png";


function Home() {
  return (
    <main className="home-container">
      {/* ---Intro */}
      <section>
        <div className="banner">
          <img src={banner} alt="" />

          <div className="banner-text">
            <p>Find students homes with bills included</p>
            <p>A simple and faster way to search for student accommodation</p>
          </div>
        </div>
        {/* ---Search-bar */}
        <SearchBar />
      </section>

      {/* ---City List */}
      <section>
        <div className="city-container">
          <h2>Student accommodations in our top cities</h2>
          <CityCards />
        </div>
      </section>

      {/* ---Banner compare */}
      <section>
        <div className="compare-banner-container">
          <h2>Compare all inclusive student homes.</h2>
          <div className="compare-all">
            <div className="search">
              <img src={searchIcon} alt="" />
              <h3>Search</h3>
              <p>
                Find your dream home in the perfect area near your university.
              </p>
            </div>

            <div className="compare">
              <img src={compareIcon} alt="" />
              <h3>Compare</h3>
              <p>
                Compare student accommodation to find the right home for you.
              </p>
            </div>

            <div className="bills">
              <img src={billsIcon} alt="" />
              <h3>Bills Included</h3>
              <p>Bills are included in all rent prices. No hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---Banner-best-selection */}
      <section>
        <div className="best-selection-container">
          <div className="left-side">
            <div className="best-selection">
              <img src={bestSelectionIcon} alt="" />
              <div className="content">
                <h3>Best selection</h3>
                <p>
                  Best selection of student accommodations. Never been easier to
                  find a home that’s right for you.
                </p>
              </div>
            </div>
            <div className="your-favorite">
              <img src={heartIcon} alt="" />
              <div className="content">
                <h3>Your favorite</h3>
                <p>
                  Shortlist your favourite properties and send enquiries in one
                  click.
                </p>
              </div>
            </div>
            <button className="search-compare-btn">Search & Compare</button>
          </div>
          {/* --right-side */}
          <div className="right-side">
            <img src={bestSelectionPhoto} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
