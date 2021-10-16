import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/kurslar" className="allCourses">
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </Link>
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <AvailableBox />
    </div>
  );
}

export default AvailableCourses;
