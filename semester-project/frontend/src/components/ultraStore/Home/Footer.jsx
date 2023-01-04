import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-form">
          <div className="form-wrapper">
            <h4>Join UltraStore</h4>
            <div className="email">
              <input type="text" placeholder="Enter e-mail" />
              <button>Sign Up</button>
            </div>
            <div className="terms">
              <input type="checkbox" />
              <p>
                <b>Yes, Please!</b>I would like to receive exclusive offers and
                football inspiration from Unisport via email. I can withdraw my
                consent at any time.
              </p>
            </div>
            <div className="terms-link">
              <Link to=""> Read our terms </Link>|
              <Link to=""> Privacy policy </Link>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <ul className="footer-ul">
            <div className="footer-list-wrapper">
              <Link to="">
                <b>#ultrastorelife</b>
              </Link>
              <Link to=""> Log in / create account </Link>
              <Link to=""> Jobs </Link>
              <Link to=""> Blog </Link>
              <Link to=""> Guides </Link>
              <Link to=""> Microsites </Link>
              <Link to=""> Newsletter </Link>
            </div>
            <div className="footer-list-wrapper">
              <Link to="">
                <b>About UltraStore</b>
              </Link>
              <Link to=""> Football specialist since 1995 </Link>
              <Link to=""> Official partner in football </Link>
              <Link to=""> E-commerce awards winner </Link>
              <Link to=""> Approved by the superstars </Link>
              <Link to=""> +5 million followers </Link>
            </div>
            <div className="footer-list-wrapper">
              <Link to="">
                <b>Gift Cards</b>
              </Link>
              <Link to="">
                <b>Legal</b>
              </Link>
              <Link to="">Privacy notice </Link>
              <Link to="">Conditions of use </Link>
              <Link to="">Imprint</Link>
            </div>
            <div className="footer-list-wrapper">
              <Link to="">
                <b>Stores</b>
              </Link>
              <Link to=""> Copenhagen </Link>
              <Link to=""> Paris </Link>
              <Link to=""> Oslo </Link>
              <Link to=""> Stockholm</Link>
            </div>
            <div className="footer-list-wrapper">
              <Link to="">
                <b> Get help </b>
              </Link>
              <Link to=""> Contact us </Link>
              <Link to=""> FAQ </Link>
              <Link to=""> Delivery </Link>
              <Link to=""> Return </Link>
              <Link to=""> Boot Selector </Link>
              <Link to=""> Glove Selector </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
