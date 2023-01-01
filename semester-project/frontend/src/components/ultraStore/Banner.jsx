import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import bannerImg1 from "../../images/banner/banner-img-1.jpg";
import bannerImg2 from "../../images/banner/banner-img-2.jpg";

const Banner = () => {
  const bannerTitle1 = "The new Nike World Cup kit";
  const bannerTitle2 =
    "Welcome to the new Future of football - only 1500 pairs world wide!";
  return (
    <>
      <div class="section-1">
        <div class="banner">
          <div class="banner-img">
            <img src={bannerImg1} alt="" />
          </div>
          <div class="gradient-overlay"></div>
          <div class="banner-info">
            <div class="banner-title">{bannerTitle1}</div>
            <Link to="/">
              <button class="shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>

        <div class="banner">
          <div class="banner-img">
            <img src={bannerImg2} alt="" />
          </div>
          <div class="gradient-overlay"></div>
          <div class="banner-info">
            <div class="banner-title">{bannerTitle2}</div>
            <Link to="/">
              <button class="shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
