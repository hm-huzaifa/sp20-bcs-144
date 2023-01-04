import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import bannerImg1 from "../../../images/banner/banner-img-1.jpg";
import bannerImg2 from "../../../images/banner/banner-img-2.jpg";

const Banner = () => {
  const bannerTitle1 = "The new Nike World Cup kit";
  const bannerTitle2 =
    "Welcome to the new Future of football - only 1500 pairs world wide!";
  return (
    <>
      <div className="section-1">
        <div className="banner">
          <div className="banner-img">
            <img src={bannerImg1} alt="" />
          </div>
          <div className="gradient-overlay"></div>
          <div className="banner-info">
            <div className="banner-title">{bannerTitle1}</div>
            <Link to="/products">
              <button className="shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>

        <div className="banner">
          <div className="banner-img">
            <img src={bannerImg2} alt="" />
          </div>
          <div className="gradient-overlay"></div>
          <div className="banner-info">
            <div className="banner-title">{bannerTitle2}</div>
            <Link to="/products">
              <button className="shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
