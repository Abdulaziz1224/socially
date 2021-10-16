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
          <Link
            target="_blank"
            to={{
              pathname: "https://www.instagram.com/sociallyuz/",
            }}
          >
            <img
              src="/images/Web Design01/footer/instagram.svg"
              alt="instagram"
              className="icon"
            />
          </Link>
          <Link
            target="_blank"
            to={{
              pathname: "https://t.me/sociallyuz",
            }}
          >
            <img
              src="/images/Web Design01/footer/telegram.svg"
              alt="telegram"
              className="icon"
            />
          </Link>
          <Link
            target="_blank"
            to={{
              pathname: "https://www.instagram.com/sociallyuz/",
            }}
          >
            <img
              src="/images/Web Design01/footer/facebook.svg"
              alt="facebook"
              className="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
