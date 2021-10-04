import React from "react";
import "./section1.scss";
function Section1() {
  return (
    <div className="section1" id="section1">
      <div className="container">
        <div className="Caption-text">
          <h2>Web Design bugungi kunda</h2>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>
        <div className="container-boxs">
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>1</span>
              <h4>Hunar 01</h4>
            </div>
            <p className="text">
              Bizneslar onlaynga o‘tganligi sabab, web designga bo‘lgan talablar
              oshmoqda!
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>2</span>
              <h4>$500</h4>
            </div>
            <p className="text">
              SNG davlatlarida web designerning o‘rtacha <br /> daromadi.
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>3</span>
              <h4>Kelajak</h4>
            </div>
            <p className="text">
              Hozirgi kunda talab <br /> anchagina yuqori bo‘lgan kelajak
              kasbini o‘rganing!
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>4</span>
              <h4>Erkinlik</h4>
            </div>
            <p className="text">
              Qayerda, qancha va kim bilan ishlashni o‘zingiz tanlang!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
