import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  console.log(product.imageURL);

  return (
    <>
      <div className="col-md-3 my-2">
        <div
          className="card text-bg-dark "
          style={{
            // background: "linear-gradient(135deg, #0F2027 0%, #2C5364  100%)",
            background: "linear-gradient(135deg, #11998e  0%, #38ef7d 100%)",
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
              <h5 className="card-title mt-2 text-dark">
                {product.name.length <= 22
                  ? product.name
                  : product.name.slice(0, 28) + "..."}
              </h5>
            </div>
            <p className="card-text text-dark d-flex justify-content-center">
              {product.description.length <= 50
                ? product.description
                : product.description.slice(0, 40) + "..."}
            </p>
            <div className="d-flex justify-content-center">
              {/* <i
                className="fa-solid fa-pen-to-square mx-2"
                // onClick={() => {
                //   updateNote(note);
                // }}
              ></i> */}
              <span className="text-dark">
                <h5>
                  <i class="fa-solid fa-euro-sign"></i> {product.price}
                </h5>
              </span>
              {/* <i
                className="fa-solid fa-trash-can mx-2"
                // onClick={() => {
                //   deleteNote(note._id);
                //   props.showAlert("Deleted Successfully", "success");
                // }}
              ></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
