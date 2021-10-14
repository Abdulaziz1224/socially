import React from "react";
import "./device.scss";
import Sistema from "./Sistema";
function Device() {
  return (
    <div className="device">
      <div className="container">
        <div className="device-top">
          <h2>Qurilmalarim</h2>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>
        <div className="device-bottom">
          <Sistema />
          <Sistema />
          <Sistema />
          <Sistema />
          <Sistema />
        </div>
      </div>
    </div>
  );
}

export default Device;
