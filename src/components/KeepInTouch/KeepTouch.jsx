import React from 'react'
import './KeepTouch.css'
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

function KeepTouch() {

  return (
     <div className="keep-touch-container">
          <div className="keep-touch">
            <h3>Keep in touch</h3>
            <p>
              Curious about new offerings? Sign up for our weekly newsletter and
              stay informed.
            </p>
            <form>
              <input type="text" placeholder="Your email" />
            </form>
          </div>
          <div className="socialize">
            <h3>Let's Socialize</h3>
            <div className="social-link">
              <BsFacebook />
             <span>Facebook</span>
            </div>
            <div className="social-link">
              <AiFillTwitterCircle />
              <span>Twitter</span>
            </div>
            <div className="social-link">
              <RiInstagramFill />
              <span>Instagram</span>
            </div>
          </div>
        </div>
  )
}

export default KeepTouch