import React from "react";
import { RiBearSmileFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contanier">
          <div className="row">
            <div className="footer-col-1">
              <div className="logo">
                <i>
                  <RiBearSmileFill />
                </i>
                <h1>KidKinder</h1>
              </div>
              <p>
                Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet
                ea dolor et magna dolor, elitr rebum duo est sed diam elitr.
                Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.
              </p>
              <div className="footer-icon">
                <i>
                  <FaTwitter />
                </i>
                <i>
                  <FaFacebookF />
                </i>
                <i>
                  <FaLinkedinIn />
                </i>
                <i>
                  <AiFillInstagram />
                </i>
              </div>
            </div>
            <div className="footer-col-2">
              <h1>Get In Touch</h1>
              <div className="footer-address">
                <i>
                  <FaLocationDot />
                </i>
                <h3>Address</h3>
              </div>
              <h3>123 Street, New York, USA</h3>
              <div className="footer-address">
                <i>
                  <IoMdMail />
                </i>
                <h3>Email</h3>
              </div>
              <h3>mail@domain.com</h3>
              <div className="footer-address">
                <i>
                  <IoCall />
                </i>
                <h3>Phone</h3>
              </div>
              <h3>+012 345 67890</h3>
            </div>
            <div className="footer-col-3">
              <h1> Quick Links</h1>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>Home</li>
              </div>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>About Us</li>
              </div>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>Our Classes</li>
              </div>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>Our Teachers</li>
              </div>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>Our Blog</li>
              </div>
              <div className="footer-list">
                <i>
                  <SlArrowRight />
                </i>
                <li>Contact Us</li>
              </div>
            </div>
            <div className="footer-col-4">
              <h1>Newsletter</h1>
              <input type="text" placeholder="Your Name" />
              <br />
              <input type="email" placeholder="Your Email" />
              <br />
              <button>Submit Now</button>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>
              @KidKinder.
              <strong>All Rights Reserved. Designed by</strong>
              Farman
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Footer };
