import React from "react";
import "./availableBox.scss";
import {Link} from "react-router-dom"

function AvailableBox() {
  return (
    <div className="availableBox">
      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""/>
        <h1 className="card-title">SMM Design Masterclass</h1>
        <Link to="video" className="full-info">
          To‘liq maʼlumot
          <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
        </Link>
      </div>

      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""/>
        <div>
          <h1 className="card-title">SMM Design Masterclass</h1>
          <Link to="video" className="full-info">
            To‘liq maʼlumot
            <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
          </Link>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""/>
        <h1 className="card-title">SMM Design Masterclass</h1>
        <Link to="video" className="full-info">
          To‘liq maʼlumot
          <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
        </Link>
      </div>
    </div>
  );
}

export default AvailableBox;
