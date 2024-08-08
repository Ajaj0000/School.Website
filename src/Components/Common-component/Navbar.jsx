import React from "react";
import { RiBearSmileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <>
      <section>
        <div className="navbar">
          <div className="contanier">
            <div className="row">
              <div className="logo">
                <i>
                  <RiBearSmileFill />
                </i>
                <h2>KidKinder</h2>
              </div>
              <div className="navbar-content">
                <Link to="/">
                  <h4>Home</h4>
                </Link>
                <Link to="/about">
                  <h4>About</h4>
                </Link>
                <Link to="/class">
                  <h4>Classes</h4>
                </Link>
                <Link to="/teachers">
                  <h4>Teachers</h4>
                </Link>
                <Link to="/gallery">
                  <h4>Gallery</h4>
                </Link>
                
                 <div className="drop-down">
                 <h4>
                    Pages
                    <IoMdArrowDropdown />
                  </h4>
                  <div className="dropdown">
                  <Link to="/bloggrid">
                    <p>Blog Grid</p>
                    </Link>
                  <Link to="/blogdetail">  <p>Blog Details</p> </Link>
                  </div>
                 </div>
                
                <Link to="/contact">
                  <h4>Contact</h4>
                </Link>
                <div className="btn">
                  <button>Join Class</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Navbar };
