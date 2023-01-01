import React from "react";

import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import PopularCategories from "./PopularCategories";

import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductSlider />
      <PopularCategories />
    </div>
  );
};

export default Home;
