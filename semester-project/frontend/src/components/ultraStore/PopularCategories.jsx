import React from "react";
import "./style.css";

import productImg1 from "../../images/popularCatagories/pc1.jpg";

const PopularCategories = () => {
  return (
    <div>
      <div>
        <div className="popular-catagories">
          <h2>Popular Catagories</h2>
          <ul>
            <li>
              <a href="" className="category-box">
                <img src={productImg1} alt="" />
                <div className="category-inner-text">Fanshop 2022/23</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc2.jpg" alt="" />
                <div className="category-inner-text">Warehouse Sale</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc3.jpg" alt="" />
                <div className="category-inner-text">Back 2 Football</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc4.jpg" alt="" />
                <div className="category-inner-text">Football Boots</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc5.jpg" alt="" />
                <div className="category-inner-text">Sneakers</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc6.jpg" alt="" />
                <div className="category-inner-text">Footballs</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc7.jpg" alt="" />
                <div className="category-inner-text">UltraStore Everyday</div>
              </a>
            </li>
            <li>
              <a href="" className="category-box">
                <img src="./imgs/popularCatagories/pc8.jpg" alt="" />
                <div className="category-inner-text">Team Kit Builder</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
