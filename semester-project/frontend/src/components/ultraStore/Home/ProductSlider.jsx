import React from "react";
import "./style.css";

import productImg1 from "../../../images/productSlider/pi1.jpg";
import productImg2 from "../../../images/productSlider/pi2.jpg";
import productImg3 from "../../../images/productSlider/pi3.jpg";
import productImg4 from "../../../images/productSlider/pi4.jpg";

const ProductSlider = () => {
  return (
    <div>
      <div className="product-slider mw-100 mt-5 d-flex justify-content-center align-items-center">
        <div className="product-container container d-flex justify-content-between align-items-center">
          <div className="product-img">
            <img src={productImg1} alt="" />
          </div>
          <div className="product-img">
            <img src={productImg2} alt="" />
          </div>
          <div className="product-img">
            <img src={productImg3} alt="" />
          </div>
          <div className="product-img">
            <img src={productImg4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
