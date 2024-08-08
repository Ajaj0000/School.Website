import React from "react";
import { Link } from "react-router-dom";

function AboutBanner(){
    return(
        <>
        <div className="about-banner">
        <div className="about-sec">
        <h1>About Us</h1>
            <div className="about-banner-text">
               <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>About Us</h3>
            </div>
        </div>
        </div>
        </>
    )
}
export{AboutBanner}