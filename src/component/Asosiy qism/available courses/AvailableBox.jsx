import React from "react";
import "./availableBox.scss";

function AvailableBox() {
  return (
    <div className="availableBox">
      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""
        />
        <h1 className="card-title">SMM Design Masterclass</h1>
        <a href="info" className="full-info">
          To‘liq maʼlumot
          <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="" />
        </a>
      </div>

      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""
        />
        <div>
          <h1 className="card-title">SMM Design Masterclass</h1>
          <a href="info" className="full-info">
            To‘liq maʼlumot
            <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""
        />
        <h1 className="card-title">SMM Design Masterclass</h1>
        <a href="info" className="full-info">
          To‘liq maʼlumot
          <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default AvailableBox;
