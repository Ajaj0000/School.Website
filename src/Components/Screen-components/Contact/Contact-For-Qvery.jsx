import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

function ContactForQvery() {
  return (
    <>
      <div className="contact-qvery">
        <div className="contanier">
          <div className="contact-text">
            <div className="contact-sec">
              <h3>GET IN TOUCH</h3>
              <h1>Contact Us For Any Query</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <input type="text" placeholder="Your Name" />
              <br />
              <input type="email" placeholder="Your Email " />
              <br />
              <input type="text" placeholder="Subject" />
              <br />
              <input type="text" placeholder="Message" className="message" />
              <br />
              <button>Send Message</button>
            </div>
            <div className="col-2">
              <p className="p">
                Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et
                kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna
                elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est
                eirmod eirmod amet.
              </p>
              <div className="contact-icon">
                <div className="contact-text-icon">
                  <i>
                    <FaLocationDot />
                  </i>
                  <div className="contact-text-sec">
                    <h2>Address</h2>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>

                <div className="contact-text-icon">
                  <i>
                    <MdEmail />
                  </i>

                  <div className="contact-text-sec">
                    <h2>Email</h2>
                    <p>mail@domain.com</p>
                  </div>
                </div>

                <div className="contact-text-icon">
                  <i>
                    <IoCall />
                  </i>
                  <div className="contact-text-sec">
                    <h2>Phone</h2>
                    <p>+012 345 67890</p>
                  </div>
                </div>

                <div className="contact-text-icon">
                  <i>
                    <FaRegClock />
                  </i>
                  <div className="contact-text-sec">
                    <h2>Opening Hours</h2>
                    <p>Sunday - Friday:</p>
                    <p>08:00 AM - 05:00 PM</p>
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
export { ContactForQvery };
