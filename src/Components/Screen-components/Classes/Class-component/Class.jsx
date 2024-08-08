import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { Footer } from "../../../Common-component/Footer";
import { ClassBanner } from "../Classes-Banner";
import { Classforkid } from "../../Home/Classes-for-kid";
import { Seatbooking } from "../../Home/Seat-Booking";

function Class (){
    return(
        <>
        <Navbar/>
        <ClassBanner/>
        <Classforkid/>
        <Seatbooking/>
        <Footer/>
        </>
    )
}
export{Class}