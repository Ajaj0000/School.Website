import React from "react";
import img1 from "../../../Assets/image/portfolio-1.jpg"
import img2 from "../../../Assets/image/portfolio-2.jpg"
import img3 from "../../../Assets/image/portfolio-3.jpg"
import img4 from "../../../Assets/image/portfolio-4.jpg"
import img5 from "../../../Assets/image/portfolio-5.jpg"
import img6 from "../../../Assets/image/portfolio-6.jpg"


function Photo(){
    return(
        <>
        <div className="photo">
            <div className="contanier">
                <div className="row">
                    <div className="phototext">
                       <div className="photo-sec">
                       <h3>OUR GALLERY</h3>
                       <h1>Our Kids School Gallery</h1>
                       </div>
                    </div>
                    <div className="photo-img">
                        <div className="img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="img">
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export{Photo}