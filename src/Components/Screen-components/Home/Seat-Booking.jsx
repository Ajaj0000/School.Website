import React from "react";

function Seatbooking(){
    return(
        <>
        <section>
            <div className="seat">
                <div className="contanier">
                    <div className="row">
                        <div className="seat-col-1">
                            <div className="seat-text">
                                <h3>Book A Seat</h3>
                                <h1>Book A Seat For Your Kid</h1>
                                <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                                <li>Labore eos amet dolor amet diam</li>
                                <li>Etsea et sit dolor amet ipsum</li>
                                <li>Diam dolor diam elitripsum vero.</li>
                                <button>Book Now</button>
                            </div>
                        </div>
                        <div className="seat-col-2">
                            <div className="booking">
                                <h1>Book a Seat</h1>
                            </div>
                            <div className="seat-input">
                                <input type="text" placeholder="Your Name" />
                                <br />
                                <input type="email" placeholder="Your Email" />
                                <br />
                                <input type="number" placeholder="Select a Class"/>
                                <br />
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export{Seatbooking}