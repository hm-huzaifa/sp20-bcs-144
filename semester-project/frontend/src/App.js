import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import NoteState from "./context/notes/NoteState";

import ResponsiveAppBar from "./components/ultraStore/ResponsiveAppBar";

import ProductState from "./context/product/ProductState";

import Navbar from "./components/ultraStore/Navbar";
import About from "./components/ultraStore/About";
import Alert from "./components/ultraStore/Alert";
import SignInSide from "./components/ultraStore/SignInSide";
import SignUpSide from "./components/ultraStore/SignUpSide";
import Home from "./components/ultraStore/Home";
import AddProduct from "./components/ultraStore/AddProduct";
import Products from "./components/ultraStore/Products";

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

  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          {/* <ResponsiveAppBar /> */}
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/login"
                element={<SignInSide showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<SignUpSide showAlert={showAlert} />}
              />
              <Route
                exact
                path="/products"
                element={<Products byBrand={true} />}
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
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
