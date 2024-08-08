import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { Footer } from "../../../Common-component/Footer";
import { Teachers } from "../../Home/Teachers";
import { TeacherBanner } from "../Teacher-Banner";

function TeacherSection(){
    return(
        <>
        <Navbar/>
        <TeacherBanner/>
        <Teachers/>
        <Footer/>
        </>
    )
}
export {TeacherSection}