import React from "react";
import "./style.css";

import productImg1 from "../../../images/popularCatagories/pc1.jpg";
import productImg2 from "../../../images/popularCatagories/pc2.jpg";
import productImg3 from "../../../images/popularCatagories/pc3.jpg";
import productImg4 from "../../../images/popularCatagories/pc4.jpg";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  return (
    <div>
      <div>
        <div className="popular-catagories ">
          <h2>Popular Catagories</h2>
          <ul className="d-flex justify-content-center align-items-center">
            <li>
              <Link to="" className="category-box">
                <img src={productImg1} alt="" />
                <div className="category-inner-text">Fanshop 2022/23</div>
              </Link>
            </li>
            <li>
              <Link to="" className="category-box">
                <img src={productImg2} alt="" />
                <div className="category-inner-text">Fanshop 2022/23</div>
              </Link>
            </li>
            <li>
              <Link to="" className="category-box">
                <img src={productImg3} alt="" />
                <div className="category-inner-text">Fanshop 2022/23</div>
              </Link>
            </li>
            <li>
              <Link to="" className="category-box">
                <img src={productImg4} alt="" />
                <div className="category-inner-text">Fanshop 2022/23</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
