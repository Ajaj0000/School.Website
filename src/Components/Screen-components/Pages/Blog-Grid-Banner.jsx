import React from "react";
import { Link } from "react-router-dom";

function BlogGridBanner(){
    return(
        <>
         <div className="about-banner">
        <div className="about-sec">
        <h1>Our Blog</h1>
            <div className="about-banner-text">
            <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>Our Blog</h3>
            </div>
        </div>
        </div>
        </>
    )
}
export{BlogGridBanner}