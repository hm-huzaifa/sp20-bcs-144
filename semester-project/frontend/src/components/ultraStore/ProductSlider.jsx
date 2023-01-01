import React from "react";
import "./style.css";

import productImg1 from "../../images/productSlider/pi1.jpg";

const ProductSlider = () => {
  return (
    <div>
      {" "}
      <div className="product-slider">
        <div className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="product-container">
          <div className="product-img">
            <img src={productImg1} alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi2.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi3.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi4.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi5.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi6.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi7.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi8.jpg" alt="" />
          </div>
          <div className="product-img">
            <img src="./imgs/productSlider/pi9.jpg" alt="" />
          </div>
        </div>
        <div className="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
