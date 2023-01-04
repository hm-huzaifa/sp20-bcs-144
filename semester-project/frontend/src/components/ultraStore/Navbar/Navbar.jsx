import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../images/Logo/logo.png";
import productContext from "../../../context/product/productContext";

const serverPort = 6969;
const host = `http://localhost:${serverPort}`;

const Navbar = () => {
  let location = useLocation();
  const context = useContext(productContext);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  const [user, setUser] = useState("");

  // Get user Data
  const getUserData = async () => {
    // API Call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const json = await response.json();

    setUser(json);
    await console.log("user: ", user);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [dropdown, setDropdown] = useState(false);

  const toggleOpen = () => {
    setDropdown(!dropdown);
  };

  const menuClass = `dropdown-menu${dropdown ? " show" : ""} bg-dark `;

  // const brands = ["Adidas", "Nike", "Puma", "NewBalance", "Mizuno"];

  // const [brand, setBrand] = useState("");

  // const onChange = (event) => {
  //   event.preventDefault();
  //   setBrand(event.target.value);
  //   getProductByBrand(brand);
  // };

  return (
    <nav
      className="navbar navbar-expand-lg bg-transparent navbar-dark"
      style={{
        // background: "linear-gradient(135deg, #11998e  0%, #38ef7d 100%)",
        background: "linear-gradient(90deg, #0b42c1  0%, #032878 100%)",
      }}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="175"
            className="d-inline-block align-text-top"
          />
        </Link>
        <Link className="navbar-brand" to="/">
          UltraStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/addproduct" ? "active" : ""
                } 
                ${user.role === "customer" ? " disabled" : ""}
              `}
                to="/addproduct"
              >
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/products" ? "active" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </li>
            {/*<li className="nav-item dropdown">
               <select
                className="form-select form-select"
                to="/products"
                role="button"
                id="brand"
                name="brand"
                value={brand}
                onChange={onChange}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              {brands.map((value) => (
                <option value={value} key={value}>
                {value}
                </option>
                ))}
              </select> 
            </li>*/}
            {/* <li className="nav-item dropdown">
               <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </Link>
              <ul className="dropdown-menu bg-dark">
                {brands.map((value) => (
                  <li>
                    <Link className="dropdown-item " to="/products">
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul> 
            </li>
              */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {localStorage.getItem("token") ? (
              <>
                <div className="dropdown mx-3 text-center" onClick={toggleOpen}>
                  <button
                    className="btn btn-none text-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <span className="">{user.name}</span>
                  </button>
                  <div
                    className={menuClass}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      className="btn btn-none text-light border border-danger mx-2 d-flex justify-content-center"
                      to="/login"
                      role="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link className="btn btn-dark mx-2" to="/login" role="button">
                  Login
                </Link>
                <Link className="btn btn-dark mx-2" to="/signup" role="button">
                  Sign Up
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
