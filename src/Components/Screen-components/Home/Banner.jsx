import React from "react";
import img from "../../../Assets/image/header.png"

function Banner(){
    return(
        <>
        <section className="">
            <div className="banner">
                <div className="row">
                    <div className="banner-text">
                    <h3>Kids Learning Center</h3>
                    <h1>New Approach to Kids Education</h1>
                    <p>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit. ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo dolore.</p>
                    <button>Learn More</button>
                    </div>
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export {Banner}