import React from "react";
import img1 from "../../../Assets/image/blog-1.jpg";
import img2 from "../../../Assets/image/blog-2.jpg";
import img3 from "../../../Assets/image/blog-3.jpg";
import { FaUser } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaMessage } from "react-icons/fa6";

function Article() {
  return (
    <>
      <div className="class">
        <div className="contanier">
          <div className="row">
            <div className="popular-class">
              <div className="popular-class-1">
                <h3>POPULAR CLASSES</h3>
                <h1>Classes for Your kids</h1>
              </div>
            </div>
            <div className="main-box">
              <div className="main">
                <div className="img">
                  <img src={img1} alt="" />
                </div>
                <div className="main-col">
                  <div className="main-text">
                    <h3>Diam amet eos at no eos</h3>
                    <div className="article">
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
                    <p>
                      Justo ea diam stet diam ipsum no sit, ipsum vero et et
                      diam ipsum duo et no et, ipsum ipsum erat duo amet clita
                      duo
                    </p>
                  </div>
                  <div className="btn">
                    <button>Join Now</button>
                  </div>
                </div>
              </div>
              <div className="main">
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                <div className="main-col">
                  <div className="main-text">
                    <h3>Diam amet eos at no eos</h3>
                    <div className="article">
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
                    <p>
                      Justo ea diam stet diam ipsum no sit, ipsum vero et et
                      diam ipsum duo et no et, ipsum ipsum erat duo amet clita
                      duo
                    </p>
                  </div>
                  <div className="btn">
                    <button>Join Now</button>
                  </div>
                </div>
              </div>
              <div className="main">
                <div className="img">
                  <img src={img3} alt="" />
                </div>
                <div className="main-col">
                  <div className="main-text">
                    <h3>Diam amet eos at no eos</h3>
                    <div className="article">
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
                    <p>
                      Justo ea diam stet diam ipsum no sit, ipsum vero et et
                      diam ipsum duo et no et, ipsum ipsum erat duo amet clita
                      duo
                    </p>
                  </div>
                  <div className="btn">
                    <button>Join Now</button>
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
export { Article };
