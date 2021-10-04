import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="connecting-text">
          <Link to="about" className="link">
            Biz haqimizda
          </Link>
          <Link to="/connecting" className="link">
            Biz bilan aloqa
          </Link>
        </div>
        <div className="connecting-icon">
          <Link to="/instagram">
            <FaInstagram className="icon" />
          </Link>
          <Link to="/telegram">
            <FaTelegramPlane className="icon" />
          </Link>
          <Link to="/facebook">
            <FiFacebook className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
