import React from "react";
import { Link } from "react-router-dom";


 function TeacherBanner(){
    return(
        <>
         <div className="about-banner">
        <div className="about-sec">
        <h1>Our Teacher</h1>
            <div className="about-banner-text">
            <Link to="/"><h3>Home</h3></Link>
               <span>/</span>
               <h3>Our Teacher</h3>
            </div>
        </div>
        </div>
        </>
    )
 }
 export{TeacherBanner}