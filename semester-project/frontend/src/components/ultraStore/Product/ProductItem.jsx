import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  console.log(product.imageURL);

  return (
    <>
      <div className="col-md-3 my-3">
        <div
          className="card text-bg-dark "
          style={{
            // background: "linear-gradient(135deg, #11998e  0%, #38ef7d 100%)",
            background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
            boxShadow:
              "1rem 1rem 3rem rgba(0, 0, 0, 0.4), -1rem -1rem 3rem rgba(0, 0, 0, 0.4)",
          }}
        >
          <img src={product.image} className="card-img-top" alt="..." />
          <div
            style={{
              position: "absolute",
              justifyContent: "flex-end",
              display: "flex",
              right: "0",
            }}
          >
            <span className="badge rounded-pill text-bg-danger mx-1 my-1">
              {product.category}
            </span>
          </div>

          <div className="card-body d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <h5 className="card-title mt-2">
                {product.name.length <= 22
                  ? product.name
                  : product.name.slice(0, 28) + "..."}
              </h5>
            </div>
            <p className="card-text d-flex justify-content-center">
              {product.description.length <= 50
                ? product.description
                : product.description.slice(0, 40) + "..."}
            </p>
            <div className="d-flex justify-content-between">
              <i className="fa-solid fa-cart-shopping mt-1"></i>
              <h5>
                <i className="fa-solid fa-euro-sign"></i> {product.price}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
