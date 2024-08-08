import React from "react";
import { Link } from "react-router-dom";

function ContactBanner(){
    return(
        <>
          <div className="about-banner">
        <div className="about-sec">
        <h1>Contact Us</h1>
            <div className="about-banner-text">
            <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>Contact Us</h3>
            </div>
        </div>
        </div>
        </>
    )
}
export{ContactBanner}