import React from "react";
import { Navbar } from "../../Common-component/Navbar";
import { BlogGridBanner } from "./Blog-Grid-Banner";
import { Article } from "../Home/Article-blog";
import { Footer } from "../../Common-component/Footer";

function BlogGrid(){
    return(
        <>
        <Navbar/>
        <BlogGridBanner/>
        <Article/>
        <Footer/>
        </>
    )
}
export{BlogGrid}