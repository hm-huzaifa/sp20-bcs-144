import React, { useState, useContext } from "react";
import productContext from "../../context/product/productContext";

import "./css/AddProduct.css";
const AddProduct = (props) => {
  const context = useContext(productContext);
  const { addProduct } = context;

  const [product, setProduct] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    image: "",
    description: "",
  });

  const onChange = (event) => {
    event.preventDefault();

    // if (event.target.id === "image") {
    //   const img = URL.createObjectURL(event.target.files[0]);
    //   setProduct({
    //     product,
    //     [event.target.image]: img,
    //   });
    //   console.log("img URL: ", URL.createObjectURL(event.target.files[0]));
    //   console.log("img: ", img);
    //   console.log("imgState: ", product.image);
    // }

    setProduct({ ...product, [event.target.name]: event.target.value });
    console.log(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    addProduct(
      product.name,
      product.price,
      product.brand,
      product.category,
      product.image,
      product.description
    );

    console.log("Adding Product: ", product);

    // setProduct({
    //   name: "",
    //   price: "",
    //   brand: "",
    //   category: "",
    //   image: "",
    //   description: "",
    // });

    props.showAlert("Product Added Successfully", "success");
  };

  const brands = ["Adidas", "Nike", "Puma", "NewBalance", "Mizuno"];

  const categories = ["Football Boots", "Football Shirts", "Sports Wear"];

  return (
    <div>
      <section className="add-product">
        <h1 className="title">Add Product</h1>
        <form className="contact-form row" onSubmit={handleSubmit}>
          <div className="form-field col-lg-6">
            <input
              className="input-text js-input"
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={onChange}
              required
            />
            <label className="label mb-3" for="name">
              Name
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              className="input-text js-input"
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={onChange}
            />
            <label className="label mb-3" for="price">
              Price
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <div className="dropdown">
              <select
                className="btn btn-dark dropdown-toggle"
                id="brand"
                name="brand"
                value={product.brand}
                onChange={onChange}
              >
                {brands.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <label className="label my-4" for="company">
              Brand
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <div className="dropdown">
              <select
                className="btn btn-dark dropdown-toggle"
                id="category"
                name="category"
                value={product.category}
                onChange={onChange}
              >
                {categories.map((val) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <label className="label my-4" for="phone">
              Category
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input
              className="input-text js-input"
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
              required
            />
            <label className="label mb-3" for="message">
              Description
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input
              className="input-text js-input"
              id="image"
              name="image"
              value={product.image}
              onChange={onChange}
              required
            />
            <label className="label mb-3" for="message">
              Image URL
            </label>
          </div>
          <div className="form-field d-flex justify-content-center col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
      ;
    </div>
  );
};

export default AddProduct;
