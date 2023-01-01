import React from "react";
import { useState } from "react";
import ProductContext from "./productContext";

const serverPort = 6969;
const host = `http://localhost:${serverPort}`;

const ProductState = (props) => {
  const productsInitial = [];

  const [product, setProduct] = useState(productsInitial);

  // Get all a Products
  const getProducts = async () => {
    // API Call
    const response = await fetch(`${host}/api/products/fetchproducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setProduct(json);
  };

  const getProductByBrand = async (brand) => {
    // API Call
    const response = await fetch(
      `${host}/api/products/fetchproducts/bybrand/${brand}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    setProduct(json);
    return product;
  };

  const getProductByCategory = async (category) => {
    // API Call
    const response = await fetch(
      `${host}/api/products/fetchproducts/bycategory/${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    setProduct(json);
  };

  // Add a Product
  const addProduct = async (
    name,
    price,
    brand,
    category,
    image,
    description
  ) => {
    // API Call
    const response = await fetch(`${host}/api/products/addproducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        brand,
        category,
        image,
        description,
      }),
    });

    const json = await response.json();
    setProduct(product.concat(json));
  };

  // Delete a Product
  const deleteProduct = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/products/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();

    const newProduct = product.filter((prod) => {
      return prod._id !== id;
    });
    setProduct(newProduct);
  };

  // Edit a Product
  const editProduct = async (
    id,
    name,
    price,
    brand,
    category,
    image,
    description
  ) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updateproduct/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        brand,
        category,
        image,
        description,
      }),
    });
    const json = await response.json();

    let newProduct = JSON.parse(JSON.stringify(product));
    // Login to edit in client
    for (let index = 0; index < newProduct.length; index++) {
      const element = newProduct[index];
      if (element._id === id) {
        newProduct[index].name = name;
        newProduct[index].price = price;
        newProduct[index].brand = brand;
        newProduct[index].category = category;
        newProduct[index].image = image;
        newProduct[index].description = description;
        break;
      }
    }
    setProduct(newProduct);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        addProduct,
        deleteProduct,
        editProduct,
        getProducts,
        getProductByBrand,
        getProductByCategory,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductState;
