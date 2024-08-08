
import React from "react";
import { Home } from "../Components/Screen-components/Home/Home-component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../Components/Screen-components/About/About-component/About";
import { Class } from "../Components/Screen-components/Classes/Class-component/Class";
import { TeacherSection } from "../Components/Screen-components/Teachers/Teacher-Component/Teacher-section";
import { Gallery } from "../Components/Screen-components/Gallery/Gallery-component/Gallery";
import { BlogGrid } from "../Components/Screen-components/Pages/Blog-Grid";
import { Contact } from "../Components/Screen-components/Contact/Contact-Component/Contact";
import { BlogDetail } from "../Components/Screen-components/Pages/Blog-Detail";
 function Routing(){
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/class" element={<Class/>}/>
          <Route path="/teachers" element={<TeacherSection/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/bloggrid" element={<BlogGrid/>}/>
          <Route path="/blogdetail" element={<BlogDetail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
 } export {Routing}