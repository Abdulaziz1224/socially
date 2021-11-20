import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./mainSection.scss";

function MainSection() {
  return (
    <div className="mainSection">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h4>
            O‘rganish uchun orzu <br /> emas harakat qiling!
          </h4>
          <span>
            UX/UI va Grafik Dizaynni o‘rganish <br /> uchun maxsus akademiya
          </span>
        </div>
      </div>
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="images">
        <img
          src="images/Asosiy Qism/BasisHeader/Union.svg"
          className="union"
          alt="union"
        />

        <img
          src="images/Asosiy Qism/BasisHeader/ellipse.svg"
          alt="ellipse"
          className="ellipse"
        />
        <div className="infiniteText">
          <img
            src="images/Asosiy Qism/BasisHeader/Yozuv.svg"
            alt="text"
            className="circleText"
          />
          <img
            src="images/Web Design01/header/1005.svg"
            alt="text"
            className="circleImg"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
