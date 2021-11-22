import React from "react";
import AvailableBox from "../../Asosiy qism/available courses/AvailableBox";
import "./kursMiddle.scss"
function KursMiddle() {
  return (
    <div className="kursMiddle">
      <div className="kursMiddle-text">
        <div className="container">
          <div className="col head">
            <div className="title">
              <h1>KURSLAR</h1>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <AvailableBox />
    </div>
  );
}

export default KursMiddle;
