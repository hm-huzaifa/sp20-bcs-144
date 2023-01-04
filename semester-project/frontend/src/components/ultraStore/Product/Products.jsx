import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productContext from "../../../context/product/productContext";
import ProductItem from "./ProductItem";

const serverPort = 6969;
const host = `http://localhost:${serverPort}`;

const Products = (props) => {
  const context = useContext(productContext);
  const navigate = useNavigate();
  const { product, getProducts, getProductByBrand, getProductByCategory } =
    context;
  // const [products, setProducts] = useState([]);

  const brands = ["Adidas", "Nike", "Puma", "NewBalance", "Mizuno"];
  const categories = ["Football Boots", "Football Shirts", "Ball"];

  var brandArray = [];
  var categoryArray = [];

  const [brand, setBrand] = useState("");
  const [brandPro, setBrandPro] = useState([]);

  const [category, setCategory] = useState("");
  const [categoryPro, setCategoryPro] = useState([]);

  const onClickBrand = async (value) => {
    setBrand(value);

    // getProductByBrand(value);
    // console.log("brand: ", brand);

    product.map((prod) => {
      if (prod.brand === value) {
        brandArray.push(prod);
      }
    });

    setBrandPro(brandArray);
    props.setBrandProducts(brandArray);
    console.log("brandPro: ", brandPro);
    navigate("/products/brand");

    // API Call
    // const response = await fetch(
    //   `${host}/api/products/fetchproducts/bybrand/${value}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const json = await response.json();
    // console.log("json: ", json);

    // const newProducts = json.filter((pro) => {
    //   return pro._brand !== pro;
    // });

    // setProducts(newProducts);
    // setProducts(json);
  };

  const onClickCategory = async (value) => {
    setCategory(value);

    // await getProductByCategory(value);
    // await console.log("product: ", product);

    product.map((prod) => {
      if (prod.category === value) {
        categoryArray.push(prod);
      }
    });
    setCategoryPro(categoryArray);
    props.setCategoryProducts(categoryArray);
    console.log("CategoryPro: ", categoryArray);
    navigate("/products/category");
  };

  const reloadProducts = (prod) => {
    return (
      <ProductItem key={prod._id} product={prod} showAlert={props.showAlert} />
    );
  };

  // useEffect(() => {
  //   getProducts();
  //   // if (!brand) {
  //   //   getProducts();
  //   //   console.log("getProducts()");
  //   // } else {
  //   //   // getProductByBrand(brand);
  //   //   console.log(`getProductByBrand(${brand})`);
  //   // }
  //  // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   brandArray.map((pro) => {
  //     reloadProducts(pro);
  //     console.log(`2nd reloadProducts(${pro});`);
  //   });
  // }, [brand]);

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
      }}
    >
      <div className="container">
        <div className=" d-flex justify-content-center text-light ">
          <h4 className="my-3">Brands</h4>
        </div>

        <div className="d-flex justify-content-center my-3">
          {brands.map((val) => (
            <button
              type="button"
              className="btn btn-outline-light mx-4"
              id="brand"
              name="brand"
              value={brand}
              key={val}
              onClick={() => {
                onClickBrand(val);
              }}
              style={{
                background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
              }}
            >
              {val}
            </button>
          ))}
        </div>

        <div className=" d-flex justify-content-center text-light ">
          <h4 className="my-3">Categories</h4>
        </div>

        <div className="d-flex justify-content-center my-3">
          {categories.map((val) => (
            <button
              type="button"
              className="btn btn-outline-light mx-4"
              id="category"
              name="category"
              value={val}
              key={val}
              onClick={() => {
                onClickCategory(val);
              }}
              style={{
                background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
              }}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="mt-5 row text-light">
          <div className="d-flex justify-content-center mb-3">
            <h2>All Products</h2>
          </div>
          <div className="container mt-2 mx-2">
            {product.length === 0 && "No Products to Purchase..."}
          </div>
          {product.map((prod) => {
            return reloadProducts(prod);
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
