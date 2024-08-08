import React from "react";
import { Link } from "react-router-dom";

 function BlogDetailBanner(){
    return(
        <>
          <div className="about-banner">
        <div className="about-sec">
        <h1>Blog Detail</h1>
            <div className="about-banner-text">
            <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>Blog Detail</h3>
            </div>
        </div>
        </div>
        </>
    )
 }
 export{BlogDetailBanner}