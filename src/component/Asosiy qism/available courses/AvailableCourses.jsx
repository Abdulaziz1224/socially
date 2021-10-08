import React from "react";
import AvailableBox from "./AvailableBox";
import "./AvailableCourses.scss";

function AvailableCourses() {
  return (
    <div className="availableCourses">
      <div className="container">
        <div className="col head">
          <div className="title">
            <h1>Mavjud kurslarimiz</h1>
            <div className="img"></div>
          </div>

          <div className="btn">
            <a href="allCourses" className="allCourses">
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </a>
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <AvailableBox />
    </div>
  );
}

export default AvailableCourses;
