import React from "react";
import { Navbar } from "../../Common-component/Navbar";
import { BlogDetailBanner } from "./Blog-Detail-Banner";
import { Footer } from "../../Common-component/Footer";
import { FaUser } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaMessage } from "react-icons/fa6";
import img1 from "../../../Assets/image/portfolio-1.jpg";
import img2 from "../../../Assets/image/portfolio-2.jpg";
import img3 from "../../../Assets/image/portfolio-3.jpg";
import img4 from "../../../Assets/image/user.jpg";

function BlogDetail() {
  return (
    <>
      <Navbar />
      <BlogDetailBanner />

      <div className="blog-detail">
        <div className="contanier">
          <div className="row">
            <div className="blog-col-1">
              <div className="blog-sec">
                <h3>GET IN TOUCH</h3>
                <h1>Contact Us For Any Query</h1>
              </div>
              <div className="blog-icon">
                <div className="icon">
                  <i>
                    <FaUser />
                  </i>
                  <p>Admin</p>
                </div>
                <div className="icon">
                  <i>
                    <GoFileDirectoryFill />
                  </i>
                  <p>Web Design</p>
                </div>
                <div className="icon">
                  <i>
                    <FaMessage />
                  </i>
                  <p>15</p>
                </div>
              </div>
              <div className="blog-img-1">
                <img src={img1} alt="" />
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
                </p>
              </div>
              <div className="blog-img-2">
                <h1>Est dolor lorem et ea</h1>
                <img src={img2} alt="" />
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
                </p>
              </div>
              <div className="blog-img-2">
                <h1>Est dolor lorem et ea</h1>
                <img src={img3} alt="" />
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
                </p>
              </div>
              <div className="blog-comment">
                <div className="blog-text-icon">
                  <img src={img4} alt="" />
                  <div className="blog-text-sec">
                    <h4>
                      John Doe <span>01 Jan 2045 at 12:00pm</span>
                    </h4>
                    <p>
                      Diam amet duo labore stet elitr ea clita ipsum, tempor
                      labore accusam ipsum et no at. Kasd diam tempor rebum
                      magna dolores sed sed eirmod ipsum. Gubergren clita
                      aliquyam consetetur sadipscing, at tempor amet ipsum diam
                      tempor consetetur at sit.
                    </p>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
              <div className="blog-comment">
                <div className="blog-text-icon">
                  <img src={img4} alt="" />
                  <div className="blog-text-sec">
                    <h4>
                      John Doe <span>01 Jan 2045 at 12:00pm</span>
                    </h4>
                    <p>
                      Diam amet duo labore stet elitr ea clita ipsum, tempor
                      labore accusam ipsum et no at. Kasd diam tempor rebum
                      magna dolores sed sed eirmod ipsum. Gubergren clita
                      aliquyam consetetur sadipscing, at tempor amet ipsum diam
                      tempor consetetur at sit.
                    </p>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
              <div className="blog-input">
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
            </div>
            <div className="blog-col-2">
              <div className="blog-col2-user">
                <img src={img4} alt="" />
                <h1>John Doe</h1>
                <p>
                  Conset elitr erat vero dolor ipsum et diam, eos dolor lorem
                  ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd
                  amet est elitr ea sit.
                </p>
              </div>
              <div className="blog-col2-category">
                <h1>Categories</h1>
                <div className="blog-col2-category-text">
                  <div className="blog-col2-category-web">
                    <p>Web Design</p>
                    <span>150</span>
                  </div>
                  <div className="blog-col2-category-web">
                    <p>Web Development</p>
                    <span>131</span>
                  </div>
                  <div className="blog-col2-category-web">
                    <p>Online Marketing</p>
                    <span>78</span>
                  </div>
                  <div className="blog-col2-category-web">
                    <p>Keyword Research</p>
                    <span>56</span>
                  </div>
                  <div className="blog-col2-category-web">
                    <p>Email Marketing</p>
                    <span>98</span>
                  </div>
                </div>
              </div>
              <div className="blog-col2-img">
                <img src={img2} alt="" />
              </div>
              <div className="blog-col2-plain">
                <h1>Plain Text</h1>
                <p>
                  aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat
                  ea est aliquyam dolor et. Et no consetetur eos labore ea erat
                  voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed
                  eos tempor rebum dolor, tempor takimata clita sit et elitr ut
                  eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export { BlogDetail };
