import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { Banner } from "../Banner";
import { Service } from "../Service";
import { BestSchool } from "../Best-school";
import { Classforkid } from "../Classes-for-kid";
import { Seatbooking } from "../Seat-Booking";
import { Teachers } from "../Teachers";
import { Article } from "../Article-blog";
import { Footer } from "../../../Common-component/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Service/>
        <BestSchool/>
        <Classforkid/>
        <Seatbooking/>
        <Teachers/>
        <Article/>
        <Footer/>
        </>
    )
}
export{Home}