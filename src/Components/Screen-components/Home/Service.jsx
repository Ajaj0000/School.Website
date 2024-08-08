import React from "react";
import { GiGrassMushroom } from "react-icons/gi";
import { MdQueueMusic } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";



function Service(){
    return(
        <>
        <section>
            <div className="service">
                <div className="contanier">
                    <div className="row">
                        <div className="box">
                            <div className="box-content">
                                <i><GiGrassMushroom /></i>
                                <div className="box-text">
                                    <h3>Play Ground</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <i><MdQueueMusic /></i>
                                <div className="box-text">
                                    <h3>Music and Dance</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <i><FaPencilRuler /></i>
                                <div className="box-text">
                                    <h3>Arts and Crafts</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <i><FaCarCrash /></i>
                                <div className="box-text">
                                    <h3>Safe Transportation</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <i><FaHandHoldingHeart /></i>
                                <div className="box-text">
                                    <h3>Healthy food</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <i><MdCastForEducation /></i>
                                <div className="box-text">
                                    <h3>Educational Tour</h3>
                                    <p>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export{Service}