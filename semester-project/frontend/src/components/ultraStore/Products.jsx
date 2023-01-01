import React, { useContext, useEffect, useState } from "react";
import productContext from "../../context/product/productContext";
import ProductItem from "./ProductItem";

const serverPort = 6969;
const host = `http://localhost:${serverPort}`;

const Products = (props) => {
  const context = useContext(productContext);
  const { product, getProducts, getProductByBrand } = context;

  const brands = ["Adidas", "Nike", "Puma", "NewBalance", "Mizuno"];

  const [brand, setBrand] = useState("");
  const [products, setProducts] = useState([]);

  const onClick = async (value) => {
    setBrand(value);
    let p = await getProductByBrand(value);
    console.log("brand: ", brand);
    console.log("products: ", product);
    console.log("p: ", p);

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
    // setProducts(json);
  };

  const reloadProducts = (prod) => {
    return (
      <ProductItem key={prod._id} product={prod} showAlert={props.showAlert} />
    );
  };

  useEffect(() => {
    reloadProducts(product);
    console.log(`reloadProducts(${product});`);
  }, [brand]);

  useEffect(() => {
    getProducts();
    // if (!brand) {
    //   getProducts();
    //   console.log("getProducts()");
    // } else {
    //   getProductByBrand(brand);
    //   console.log(`getProductByBrand(${brand})`);
    // }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <h2 className="my-2">Products</h2>
        </div>

        <div className="container d-flex justify-content-center my-3">
          {brands.map((val) => (
            <button
              type="button"
              className="btn btn-outline-light mx-4"
              id="brand"
              name="brand"
              value={brand}
              key={val}
              onClick={() => {
                setBrand(val);
                onClick(val);
              }}
              style={{
                // background: "linear-gradient(135deg, #485563 0%,#29323c  100%)",
                // background:
                //   "linear-gradient(135deg, #0F2027 0%, #2C5364  100%)",
                background:
                  "linear-gradient(135deg, #11998e  0%, #38ef7d 100%)",
              }}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="container mt-5 row text-dark">
          <div className="d-flex justify-content-center mb-3">
            <h2>All Products</h2>
          </div>
          <div className="container mt-2 mx-2">
            {product.length === 0 && "No notes to display..."}
          </div>
          {product.map((prod) => {
            return reloadProducts(prod);
            // return (
            //   <ProductItem
            //     key={prod._id}
            //     product={prod}
            //     showAlert={props.showAlert}
            //   />
            // );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
