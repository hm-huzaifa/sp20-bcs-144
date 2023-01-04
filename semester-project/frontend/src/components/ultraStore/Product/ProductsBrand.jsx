import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductsBrand = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(props.brandProducts);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
      }}
    >
      <div className="container">
        <div className="container row text-light">
          <div className="d-flex justify-content-center mb-3">
            <h2>{props.brandProducts[0].brand}</h2>
          </div>
          <div className="container mt-2 mx-2">
            {product.length === 0 && "No Products to Purchase..."}
          </div>
          {product.map((prod) => {
            return (
              <ProductItem
                key={prod._id}
                product={prod}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsBrand;
