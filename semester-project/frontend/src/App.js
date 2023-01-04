import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import NoteState from "./context/notes/NoteState";

import ResponsiveAppBar from "./components/ultraStore/Navbar/ResponsiveAppBar";

import ProductState from "./context/product/ProductState";

import Navbar from "./components/ultraStore/Navbar/Navbar";
import About from "./components/ultraStore/About";
import Alert from "./components/ultraStore/Alert";

import Login from "./components/ultraStore/Authentication/Login";
import SignUp from "./components/ultraStore/Authentication/SignUp";
import Home from "./components/ultraStore/Home/Home";

import AddProduct from "./components/ultraStore/Product/AddProduct";
import Products from "./components/ultraStore/Product/Products";
import ProductsBrand from "./components/ultraStore/Product/ProductsBrand";
import ProductsCategory from "./components/ultraStore/Product/ProductsCategory";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [brandProducts, setBrandProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
              />
              <Route
                exact
                path="/products"
                element={
                  <Products
                    setBrandProducts={setBrandProducts}
                    setCategoryProducts={setCategoryProducts}
                  />
                }
              />
              <Route
                exact
                path="/products/brand"
                element={<ProductsBrand brandProducts={brandProducts} />}
              />
              <Route
                exact
                path="/products/category"
                element={
                  <ProductsCategory categoryProducts={categoryProducts} />
                }
              />
              <Route
                exact
                path="/addproduct"
                element={<AddProduct showAlert={showAlert} />}
              />
              <Route
                exact
                path="/about"
                element={<About showAlert={showAlert} />}
              />
            </Routes>
          </>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
