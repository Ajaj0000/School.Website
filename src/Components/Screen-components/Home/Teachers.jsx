import React from "react";
import img1 from "../../../Assets/image/team-1.jpg";
import img2 from "../../../Assets/image/team-2.jpg";
import img3 from "../../../Assets/image/team-3.jpg";
import img4 from "../../../Assets/image/team-4.jpg";

function Teachers() {
  return (
    <>
      <div className="teacher">
        <div className="contanier">
          <div className="row">
            <div className="teacher-col-1">
              <div className="teacher-box">
                <h3>OUR TEACHERS</h3>
                <h1>Meet Our Teachers</h1>
              </div>
            </div>
            <div className="teacher-img">
              <div className="img">
                <img src={img1} alt="" />
                <div className="teacher-txt">
                  <div className="teacher-txt-b">
                    <h2>Julia Smith</h2>
                    <h4>Music Teacher</h4>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={img2} alt="" />
                <div className="teacher-txt">
                  <div className="teacher-txt-b">
                    <h2>Julia Smith</h2>
                    <h4>Music Teacher</h4>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={img3} alt="" />
                <div className="teacher-txt">
                  <div className="teacher-txt-b">
                    <h2>Julia Smith</h2>
                    <h4>Music Teacher</h4>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={img4} alt="" />
                <div className="teacher-txt">
                  <div className="teacher-txt-b">
                    <h2>Julia Smith</h2>
                    <h4>Music Teacher</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Teachers };
