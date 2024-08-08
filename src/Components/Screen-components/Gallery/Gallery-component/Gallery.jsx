import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { GalleryBanner } from "../Gallery-Banner";
import { Footer } from "../../../Common-component/Footer";
import { Photo } from "../Photo";

function Gallery(){
    return(
        <>
        <Navbar/>
        <GalleryBanner/>
        <Photo/>
        <Footer/>
        </>
    )
}
export{Gallery}