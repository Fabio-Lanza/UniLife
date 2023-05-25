import React from "react";
import "./Header.css";
import logo from "../../assets/images/Vector.svg";
import {BsSuitHeart, BsEnvelope} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Header(){
  
  return (
    <div className="header-container">
      <Link to='/' className="logo">
        <img src={logo} alt="" />
        <span>UniLife</span>
      </Link>
      <div className="header-box">
        <div className="shortlist">
            <BsSuitHeart/>
            <span>Shortlist</span> 
            </div>
        <div className="contact">
            <BsEnvelope/>
           <span>Contact Us</span> 
            </div>
      </div>
    </div>
  );
}

export default Header;
