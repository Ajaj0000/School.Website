import React from "react";
import { Link } from "react-router-dom";

function GalleryBanner(){
    return(
        <>
          <div className="about-banner">
        <div className="about-sec">
        <h1>Gallery</h1>
            <div className="about-banner-text">
            <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>Gallery</h3>
            </div>
        </div>
        </div>
        </>
    )
}
export{GalleryBanner}