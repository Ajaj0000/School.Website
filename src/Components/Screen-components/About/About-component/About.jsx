import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { Footer } from "../../../Common-component/Footer";
import { AboutBanner } from "../About-Banner";
import { BestSchool } from "../../Home/Best-school";
import { Service } from "../../Home/Service";
import { Teachers } from "../../Home/Teachers";

function About(){
    return(
        <>
        <Navbar/>
        <AboutBanner/>
        <BestSchool/>
        <Service/>
        <Teachers/>
        <Footer/>
        </>
    )
}
export{About}