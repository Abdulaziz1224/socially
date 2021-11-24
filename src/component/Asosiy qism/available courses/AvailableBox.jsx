import React, { useEffect, useState } from "react";
import "./availableBox.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function AvailableBox() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://socially2.herokuapp.com/v2/course/public/all?size=3&offset=0&sort=-1"
      )
      .then((res) => {
        setCourses(res.data.data);
        console.log(res.data.data[0].title.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="availableBox">
      {courses.map((course) => {
        return (
          <div className="card">
            <img
              className="card-img"
              src={`https://socially.uz/${course.imageUrl}`}
              alt=""
            />
            <h1 className="card-title">
              {course.title.length > 20
                ? course.title.slice(0, 20) + "..."
                : course.title}
            </h1>
            <div className="profile">
              <img src="/images/videoCourse/avatar.png" alt="" style={{width: "35px", height: "35px", objectFit: "cover"}} />
              <p className="name">Ismoil Safarov</p>
            </div>
            <p className="text">
              {course.description.length > 60
                ? course.description.slice(0, 60) + "..."
                : course.description}
            </p>
            <Link to="video" className="full-info">
              Batafsil maʼlumot
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt=""
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AvailableBox;
