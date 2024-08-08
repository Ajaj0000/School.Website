import React from "react";
import { Navbar } from "../../../Common-component/Navbar";
import { ContactBanner } from "../Contact-Banner";
import { Footer } from "../../../Common-component/Footer";
import { ContactForQvery } from "../Contact-For-Qvery";

function Contact(){
    return(
        <>
        <Navbar/>
        <ContactBanner/>
        <ContactForQvery/>
        <Footer/>
        </>
    )
}
export{Contact}