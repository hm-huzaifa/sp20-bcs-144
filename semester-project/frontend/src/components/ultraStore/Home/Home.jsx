import React from "react";

import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import PopularCategories from "./PopularCategories";
import Footer from "./Footer";

import BackgroundImg from "../../../images/Background/Adidas-X.png";

const Home = () => {
  return (
    <div
      className="mw-100"
      style={{
        background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
      }}
    >
      {/* 
      {/* <div className="mw-100 d-flex justify-content-center">
        <img
          src={BackgroundImg}
          className="w-75 justify-content-center"
          alt=""
        />
      </div> */}
      <Banner />
      <ProductSlider />
      <PopularCategories />
      <Footer />
    </div>
  );
};

export default Home;
