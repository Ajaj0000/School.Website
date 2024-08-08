import React from "react";
import img from "../../../Assets/image/about-1.jpg";
import img2 from "../../../Assets/image/about-2.jpg";

function BestSchool() {
  return (
    <>
      <section>
        <div className="best-school">
          <div className="contanier">
            <div className="row">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="col">
                <p className="p">Learn About Us</p>
                <h1>Best School For Your Kids</h1>
                <p>
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <div className="col-b">
                  <div className="col-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-text">
                    <hr/>
                    <li>Labore eos amet dolor amet diam</li>
                    <hr/>
                    <li>Etsea et sit dolor amet ipsum</li>
                    <hr/>
                    <li>Diam dolor diam elitripsum vero.</li>
                    <hr/>
                  </div>
                </div>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { BestSchool };
